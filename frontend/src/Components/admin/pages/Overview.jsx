// Overview.jsx
// -----------------------------------------------------------
// The "Overview" page - this is the main content shown when
// the Sidebar's "Overview" item is selected. It matches the
// screenshot: 4 stat cards on top, then a "Recent Activity"
// table below.
// -----------------------------------------------------------

import "./Overview.css";

// The 4 small stat cards at the top of the page.
// Stored as a list so the JSX below can just .map() over it
// instead of repeating the same card markup 4 times.
const STATS = [
  { label: "Total Registered Voters", value: "1,245" },
  { label: "Votes Casted", value: "982" },
  { label: "Active Candidates", value: "15" },
  { label: "Days Remaining", value: "3" },
];

// Sample rows for the "Recent Activity" table.
// In a real app this would come from an API call instead.
const ACTIVITY = [
  { date: "Oct 26, 2023", type: "Vote", details: "John Smith cast a vote" },
  { date: "Oct 26, 2023", type: "Vote", details: "John Smith cast a vote" },
  { date: "Oct 26, 2023", type: "Vote", details: "John Smith cast a vote" },
  { date: "Oct 26, 2023", type: "Vote", details: "John Smith cast a vote" },
  { date: "Oct 26, 2023", type: "Vote", details: "John Smith cast a vote" },
  { date: "Oct 26, 2023", type: "Vote", details: "John Smith cast a vote" },
  { date: "Oct 25, 2023", type: "Vote", details: "Jane Doe cast a vote" },
  { date: "Oct 25, 2023", type: "Candidate", details: "New candidate registration: Alice Wong" },
];

export default function Overview() {
  return (
    <div className="overview-page">
      <h1 className="page-heading">Overview</h1>

      {/* ---- Stat cards row ---- */}
      <div className="stats-grid">
        {STATS.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <p className="stat-label">{stat.label}</p>
            <p className="stat-value">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* ---- Recent activity table ---- */}
      <div className="activity-card">
        <h2 className="activity-heading">Recent Activity</h2>

        <table className="activity-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {ACTIVITY.map((row, index) => (
              // index is fine as a key here since this is static sample data
              <tr key={index}>
                <td>{row.date}</td>
                <td>{row.type}</td>
                <td>{row.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
