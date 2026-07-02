import "./navbarUser.css";
import logo from "../LandingPage/logo.png";

// onMenuToggle: function passed in from DashboardLayout — called
// when the user taps the hamburger button on mobile.
export default function NavbarUser({ onMenuToggle }) {
  return (
    <header className="navbar">
      {/* Left side: hamburger (mobile only) + logo + title */}
      <div className="navbar-brand">
        {/* Hamburger button — hidden on desktop via CSS */}
        <button
          className="hamburger-button"
          onClick={onMenuToggle}
          aria-label="Toggle navigation menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="3" y1="6"  x2="21" y2="6"  strokeWidth="2" strokeLinecap="round" />
            <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" strokeLinecap="round" />
            <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <img src={logo} alt="KCMIT Logo" className="navbar-logo" />
        <span className="navbar-title">KCMIT Club Election</span>
      </div>


      {/* Right side: user profile */}
      <div className="navbar-profile">
        <div className="profile-avatar">
          <svg viewBox="0 0 24 24" fill="currentColor" className="avatar-icon">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" />
          </svg>
        </div>
        {/* Hide "User" text on very small screens — avatar is enough */}
        <span className="profile-name">User</span>
        <svg className="profile-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <polyline points="6 9 12 15 18 9" strokeWidth="2" />
        </svg>
      </div>
    </header>
  );
}
