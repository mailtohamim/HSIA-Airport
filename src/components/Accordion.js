'use client';
import { useState } from 'react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="accordion">
      {items.map((item, i) => (
        <div key={i} className="accordion-item">
          <button
            className="accordion-header"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            id={`accordion-header-${i}`}
          >
            {item.title}
            <span className={`accordion-chevron ${openIndex === i ? 'open' : ''}`}>▾</span>
          </button>
          <div className={`accordion-content ${openIndex === i ? 'open' : ''}`}>
            <div className="accordion-body">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
