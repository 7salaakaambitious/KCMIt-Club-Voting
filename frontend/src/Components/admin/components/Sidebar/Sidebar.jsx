// Sidebar.jsx
// -----------------------------------------------------------
// Left-hand navigation menu.
// On desktop: always visible.
// On mobile:  slides in from the left when isOpen=true,
//             hidden off-screen when isOpen=false.
// -----------------------------------------------------------

import "./Sidebar.css";

const MENU_ITEMS = [
  {
    key: "overview",
    label: "Overview",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 11l9-8 9 8" strokeWidth="2" />
        <path d="M5 10v10h14V10" strokeWidth="2" />
      </svg>
    ),
  },
  {
    key: "candidates",
    label: "Manage Candidates",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="9" cy="8" r="3" strokeWidth="2" />
        <path d="M2 20c0-3.3 3.1-5.5 7-5.5s7 2.2 7 5.5" strokeWidth="2" />
        <circle cx="17" cy="8" r="3" strokeWidth="2" />
        <path d="M14.5 14.6c3.3.3 5.5 2.4 5.5 5.4" strokeWidth="2" />
      </svg>
    ),
  },
  {
    key: "voters",
    label: "Voter List",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="5" y="3" width="14" height="18" rx="2" strokeWidth="2" />
        <line x1="8" y1="8" x2="16" y2="8" strokeWidth="2" />
        <line x1="8" y1="12" x2="16" y2="12" strokeWidth="2" />
        <line x1="8" y1="16" x2="12" y2="16" strokeWidth="2" />
      </svg>
    ),
  },
  {
    key: "settings",
    label: "Election Settings",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="3" strokeWidth="2" />
        <path
          strokeWidth="2"
          d="M19.4 13a7.97 7.97 0 0 0 0-2l2-1.6-2-3.4-2.4 1a8 8 0 0 0-1.7-1L15 3h-4l-.3 2a8 8 0 0 0-1.7 1l-2.4-1-2 3.4L6.6 11a7.97 7.97 0 0 0 0 2l-2 1.6 2 3.4 2.4-1a8 8 0 0 0 1.7 1L11 21h4l.3-2a8 8 0 0 0 1.7-1l2.4 1 2-3.4z"
        />
      </svg>
    ),
  },
  {
    key: "results",
    label: "Results",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="4" y="4" width="16" height="18" rx="2" strokeWidth="2" />
        <line x1="8" y1="9" x2="16" y2="9" strokeWidth="2" />
        <line x1="8" y1="13" x2="16" y2="13" strokeWidth="2" />
        <line x1="8" y1="17" x2="12" y2="17" strokeWidth="2" />
      </svg>
    ),
  },
];

// isOpen: boolean — controlled by DashboardLayout, used on mobile only
export default function Sidebar({ activePage, onNavigate, isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
      <nav className="sidebar-nav">
        {MENU_ITEMS.map((item) => {
          const isActive = item.key === activePage;
          return (
            <button
              key={item.key}
              className={`sidebar-item ${isActive ? "sidebar-item-active" : ""}`}
              onClick={() => onNavigate(item.key)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-label">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
