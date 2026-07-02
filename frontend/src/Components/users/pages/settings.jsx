import "../../admin/pages/ElectionSettings.css";

export default function UserSettings() {
  return (
    <div className="settings-page">
      <h1 className="page-heading">User Settings</h1>

      <div className="settings-card">
        <div className="form-group">
          <label htmlFor="displayName">Display Name</label>
          <input id="displayName" type="text" defaultValue="Voter" />
        </div>

        <div className="form-group form-checkbox">
          <input id="emailUpdates" type="checkbox" defaultChecked />
          <label htmlFor="emailUpdates">Receive election updates</label>
        </div>
      </div>
    </div>
  );
}
