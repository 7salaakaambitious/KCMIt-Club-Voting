// VoterList.jsx
// -----------------------------------------------------------
// The "Voter List" page. Shows registered voters in a table.
// -----------------------------------------------------------

import "./VoterList.css";

const VOTERS = [
  { id: "VOT-1001", name: "John Smith", email: "john.smith@kcmit.edu", hasVoted: true },
  { id: "VOT-1002", name: "Jane Doe", email: "jane.doe@kcmit.edu", hasVoted: true },
  { id: "VOT-1003", name: "Ravi Kumar", email: "ravi.kumar@kcmit.edu", hasVoted: false },
  { id: "VOT-1004", name: "Alice Wong", email: "alice.wong@kcmit.edu", hasVoted: false },
];

export default function VoterList() {
  return (
    <div className="voters-page">
      <h1 className="page-heading">Voter List</h1>

      <div className="voters-card">
        <table className="voters-table">
          <thead>
            <tr>
              <th>Voter ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Voted</th>
            </tr>
          </thead>
          <tbody>
            {VOTERS.map((voter) => (
              <tr key={voter.id}>
                <td>{voter.id}</td>
                <td>{voter.name}</td>
                <td>{voter.email}</td>
                <td>
                  <span
                    className={`voted-badge ${
                      voter.hasVoted ? "voted-yes" : "voted-no"
                    }`}
                  >
                    {voter.hasVoted ? "Yes" : "Not yet"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
