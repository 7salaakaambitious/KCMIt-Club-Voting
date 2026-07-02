// Results.jsx
// -----------------------------------------------------------
// The "Results" page. Shows each candidate with a simple
// CSS-only progress bar representing their vote share.
// -----------------------------------------------------------

import "./Results.css";

const RESULTS = [
  { name: "John Smith", position: "President", votes: 312, percent: 58 },
  { name: "Jane Doe", position: "Vice President", votes: 287, percent: 64 },
  { name: "Mike Chen", position: "Treasurer", votes: 198, percent: 45 },
];

export default function Results() {
  return (
    <div className="results-page">
      <h1 className="page-heading">Results</h1>

      <div className="results-card">
        {RESULTS.map((r) => (
          <div className="result-row" key={r.name}>
            <div className="result-info">
              <p className="result-name">{r.name}</p>
              <p className="result-position">{r.position}</p>
            </div>

            <div className="result-bar-track">
              <div
                className="result-bar-fill"
                style={{ width: `${r.percent}%` }}
              />
            </div>

            <div className="result-stats">
              <span className="result-votes">{r.votes} votes</span>
              <span className="result-percent">{r.percent}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
