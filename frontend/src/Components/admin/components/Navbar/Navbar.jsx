// Navbar.jsx
// -----------------------------------------------------------
// The top bar of the admin dashboard.
// On mobile it shows a hamburger (☰) button that opens/closes
// the sidebar drawer. The search box collapses to an icon on
// very small screens.
// -----------------------------------------------------------

import "./Navbar.css";
import logo from "../../../LandingPage/logo.png";

// onMenuToggle: function passed in from DashboardLayout — called
// when the user taps the hamburger button on mobile.
export default function Navbar({ onMenuToggle }) {
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
        <span className="navbar-title">KCMIT Election Admin</span>
      </div>

      {/* Middle: search box */}
      <div className="navbar-search">
        <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="7" strokeWidth="2" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
        </svg>
        <input type="text" placeholder="Search" className="search-input" />
      </div>

      {/* Right side: admin profile */}
      <div className="navbar-profile">
        <div className="profile-avatar">
          <svg viewBox="0 0 24 24" fill="currentColor" className="avatar-icon">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" />
          </svg>
        </div>
        {/* Hide "Admin User" text on very small screens — avatar is enough */}
        <span className="profile-name">Admin User</span>
        <svg className="profile-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <polyline points="6 9 12 15 18 9" strokeWidth="2" />
        </svg>
      </div>
    </header>
  );
}
