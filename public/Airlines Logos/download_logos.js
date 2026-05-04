const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE_URL = 'https://commons.wikimedia.org/w/api.php';
const TARGET_DIR = __dirname;
const downloadedFiles = new Set();
const visitedCategories = new Set();
const USER_AGENT = 'AirlinesLogosBot/1.0 (https://github.com/example/bot) Node.js/24';

const delay = ms => new Promise(res => setTimeout(res, ms));

async function fetchJson(url, retries = 5, backoff = 2000) {
    try {
        return await new Promise((resolve, reject) => {
            const req = https.get(url, { headers: { 'User-Agent': USER_AGENT } }, (res) => {
                let data = '';
                res.on('data', chunk => data += chunk);
                res.on('end', () => {
                    if (res.statusCode === 429) {
                        const retryAfter = res.headers['retry-after'] ? parseInt(res.headers['retry-after']) * 1000 : 600000;
                        return reject(new Error(`429:${retryAfter}`));
                    }
                    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                         return fetchJson(res.headers.location, retries, backoff).then(resolve).catch(reject);
                    }
                    if (res.statusCode !== 200) {
                        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
                    }
                    try {
                        resolve(JSON.parse(data));
                    } catch (e) {
                        reject(e);
                    }
                });
            }).on('error', reject);
            req.setTimeout(15000, () => { req.destroy(); reject(new Error('Timeout')); });
        });
    } catch (err) {
        if (retries > 0) {
            let waitTime = backoff;
            if (err.message.startsWith('429:')) {
                waitTime = parseInt(err.message.split(':')[1]);
                console.log(`Rate limited (API). Waiting ${waitTime/1000}s...`);
            } else {
                console.log(`API Error: ${err.message}. Retrying in ${waitTime/1000}s...`);
            }
            await delay(waitTime);
            return fetchJson(url, retries - 1, backoff * 2);
        }
        throw err;
    }
}

async function downloadFile(url, dest, retries = 5, backoff = 5000) {
    try {
        return await new Promise((resolve, reject) => {
            if (fs.existsSync(dest)) {
                return resolve(true); // already exists
            }
            
            const req = https.get(url, { headers: { 'User-Agent': USER_AGENT } }, (res) => {
                if (res.statusCode === 429) {
                    const retryAfter = res.headers['retry-after'] ? parseInt(res.headers['retry-after']) * 1000 : 600000;
                    return reject(new Error(`429:${retryAfter}`));
                }
                if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                    return downloadFile(res.headers.location, dest, retries, backoff).then(resolve).catch(reject);
                }
                if (res.statusCode !== 200) {
                    return reject(new Error(`HTTP ${res.statusCode}`));
                }
                const file = fs.createWriteStream(dest);
                res.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve(false); // newly downloaded
                });
                file.on('error', err => {
                    fs.unlink(dest, () => {});
                    reject(err);
                });
            }).on('error', err => {
                reject(err);
            });
            req.setTimeout(30000, () => { req.destroy(); reject(new Error('Timeout')); });
        });
    } catch (err) {
        if (retries > 0) {
            let waitTime = backoff;
            if (err.message.startsWith('429:')) {
                waitTime = parseInt(err.message.split(':')[1]);
                console.log(`Rate limited (Download). Waiting ${waitTime/1000}s...`);
            } else {
                console.log(`Download error (${err.message}). Retrying in ${waitTime/1000}s...`);
            }
            await delay(waitTime);
            return downloadFile(url, dest, retries - 1, backoff * 2);
        }
        throw err;
    }
}

const downloadQueue = [];
let activeDownloads = 0;
const MAX_CONCURRENT_DOWNLOADS = 1; // 1 concurrent to be safe

async function processDownloadQueue() {
    let idleCount = 0;
    while (true) {
        if (downloadQueue.length > 0 && activeDownloads < MAX_CONCURRENT_DOWNLOADS) {
            idleCount = 0;
            const task = downloadQueue.shift();
            activeDownloads++;
            task().then(() => {
                activeDownloads--;
            }).catch(err => {
                console.error('Final download failure:', err.message);
                activeDownloads--;
            });
            await delay(1500); // 1.5 seconds delay between starting downloads to respect 1 req/sec rate
        } else {
            if (downloadQueue.length === 0 && activeDownloads === 0) {
                idleCount++;
                if (idleCount > 100) { // Wait 10 seconds after queue is empty to exit
                    break;
                }
            } else {
                idleCount = 0;
            }
            await new Promise(r => setTimeout(r, 100));
        }
    }
}

async function processCategory(categoryTitle) {
    if (visitedCategories.has(categoryTitle)) return;
    visitedCategories.add(categoryTitle);
    console.log(`\nProcessing category: ${categoryTitle}`);

    let continueToken = '';
    while (true) {
        await delay(1000); // 1 second delay between API calls
        const url = `${BASE_URL}?action=query&generator=categorymembers&gcmtitle=${encodeURIComponent(categoryTitle)}&gcmtype=file|subcat&gcmlimit=50&prop=imageinfo&iiprop=url&format=json${continueToken}`;
        try {
            const data = await fetchJson(url);
            
            const pages = data.query ? data.query.pages : {};
            
            const files = [];
            const subcats = [];
            
            for (const pageId in pages) {
                const page = pages[pageId];
                if (page.title.startsWith('Category:')) {
                    subcats.push(page.title);
                } else if (page.title.startsWith('File:') && page.title.toLowerCase().endsWith('.svg')) {
                    if (page.imageinfo && page.imageinfo.length > 0) {
                        files.push({ title: page.title, url: page.imageinfo[0].url.split('?')[0] });
                    }
                }
            }

            for (const file of files) {
                let cleanName = file.title.replace(/^File:/i, '').replace(/[\/\?<>\\:\*\|"]/g, '_');
                if (downloadedFiles.has(cleanName)) continue;
                downloadedFiles.add(cleanName);
                
                const dest = path.join(TARGET_DIR, cleanName);
                if (fs.existsSync(dest)) continue;
                
                downloadQueue.push(() => {
                    process.stdout.write(`+ ${cleanName}\n`);
                    return downloadFile(file.url, dest);
                });
            }

            for (const subcat of subcats) {
                await processCategory(subcat);
            }

            if (data.continue && data.continue.gcmcontinue) {
                continueToken = `&gcmcontinue=${encodeURIComponent(data.continue.gcmcontinue)}`;
            } else {
                break;
            }
        } catch (err) {
            console.error(`Error processing category ${categoryTitle}:`, err.message);
            break;
        }
    }
}

async function main() {
    console.log('Starting download...');
    processDownloadQueue(); // run asynchronously
    
    await processCategory('Category:SVG_logos_of_airlines');
    console.log('\nFinished discovering categories. Waiting for downloads to finish...');
    
    while (downloadQueue.length > 0 || activeDownloads > 0) {
        await new Promise(r => setTimeout(r, 1000));
    }
    
    console.log(`Done. Total tracked logos: ${downloadedFiles.size}.`);
    process.exit(0);
}

main();
