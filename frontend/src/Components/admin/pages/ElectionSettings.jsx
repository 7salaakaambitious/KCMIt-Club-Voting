// ElectionSettings.jsx
// -----------------------------------------------------------
// The "Election Settings" page. A simple settings form using
// React's useState so beginners can see how form inputs work.
// -----------------------------------------------------------

import { useState } from "react";
import "./ElectionSettings.css";

export default function ElectionSettings() {
  // Each piece of form data gets its own state variable.
  const [electionName, setElectionName] = useState("KCMIT Club Election 2026");
  const [startDate, setStartDate] = useState("2026-07-01");
  const [endDate, setEndDate] = useState("2026-07-04");
  const [allowAnonymous, setAllowAnonymous] = useState(true);

  function handleSave(event) {
    event.preventDefault(); // stops the page from refreshing
    alert("Settings saved!"); // beginner-friendly placeholder for a real save action
  }

  return (
    <div className="settings-page">
      <h1 className="page-heading">Election Settings</h1>

      <form className="settings-card" onSubmit={handleSave}>
        <div className="form-group">
          <label htmlFor="electionName">Election Name</label>
          <input
            id="electionName"
            type="text"
            value={electionName}
            onChange={(e) => setElectionName(e.target.value)}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <input
              id="startDate"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="endDate">End Date</label>
            <input
              id="endDate"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group form-checkbox">
          <input
            id="allowAnonymous"
            type="checkbox"
            checked={allowAnonymous}
            onChange={(e) => setAllowAnonymous(e.target.checked)}
          />
          <label htmlFor="allowAnonymous">Keep votes anonymous</label>
        </div>

        <button type="submit" className="save-button">
          Save Settings
        </button>
      </form>
    </div>
  );
}
