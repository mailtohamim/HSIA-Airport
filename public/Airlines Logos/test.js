const https = require('https');

const BASE_URL = 'https://commons.wikimedia.org/w/api.php';

async function fetchJson(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

async function test() {
    const url = `${BASE_URL}?action=query&generator=categorymembers&gcmtitle=Category:SVG_logos_of_airlines&gcmtype=file|subcat&gcmlimit=5&prop=imageinfo&iiprop=url&format=json`;
    console.log("Fetching", url);
    const data = await fetchJson(url);
    console.log(JSON.stringify(data, null, 2));
}

test();
