
import React from "react";

const values = [
  "SOFTWARE DEVELOPMENT",
  "WEB DESIGN",
  "UI/UX",
  "CREATIVE DIRECTION",
  "DIGITAL EXPERIENCES",
  "PROBLEM SOLVING",
  "VISUAL STORYTELLING",
  "BUSINESS SYSTEMS",
];

export default function Ticker() {
  return (
    <section
      id="ticker"
      className="portfolio-ticker"
      aria-label="Areas of expertise"
    >
      <div className="portfolio-ticker-track">
        {/* First set */}
        <div className="portfolio-ticker-group">
          {values.map((value, index) => (
            <React.Fragment key={`first-${index}`}>
              <span className="portfolio-ticker-word">{value}</span>

              <span className="portfolio-ticker-separator" aria-hidden="true">
                ✳
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* Duplicate set creates the seamless loop */}
        <div className="portfolio-ticker-group" aria-hidden="true">
          {values.map((value, index) => (
            <React.Fragment key={`second-${index}`}>
              <span className="portfolio-ticker-word">{value}</span>

              <span className="portfolio-ticker-separator">
                ✳
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
