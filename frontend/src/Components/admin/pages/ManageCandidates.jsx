// ManageCandidates.jsx
// -----------------------------------------------------------
// The "Manage Candidates" page. Shows a list of candidates
// in a card-styled table, plus an "Add Candidate" button.
// Follows the same visual style (orange-bordered white card)
// as the Overview page, but lives in its own file/CSS as requested.
// -----------------------------------------------------------

import "./ManageCandidates.css";

const CANDIDATES = [
  { name: "John Smith", position: "President", votes: 312, status: "Approved" },
  { name: "Jane Doe", position: "Vice President", votes: 287, status: "Approved" },
  { name: "Alice Wong", position: "Secretary", votes: 0, status: "Pending" },
  { name: "Mike Chen", position: "Treasurer", votes: 198, status: "Approved" },
];

export default function ManageCandidates() {
  return (
    <div className="candidates-page">
      <div className="candidates-header">
        <h1 className="page-heading">Manage Candidates</h1>
        <button className="add-candidate-button">+ Add Candidate</button>
      </div>

      <div className="candidates-card">
        <table className="candidates-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Votes</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {CANDIDATES.map((c, index) => (
              <tr key={index}>
                <td>{c.name}</td>
                <td>{c.position}</td>
                <td>{c.votes}</td>
                <td>
                  <span
                    className={`status-badge ${
                      c.status === "Approved" ? "status-approved" : "status-pending"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>
                <td>
                  <button className="link-button">Edit</button>
                  <button className="link-button link-button-danger">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
