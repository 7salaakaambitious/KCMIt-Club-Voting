import "../admin/components/Sidebar/Sidebar.css";

const MENU_ITEMS = [
  {
    key: "home",
    label: "Home",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 11l9-8 9 8" strokeWidth="2" />
        <path d="M5 10v10h14V10" strokeWidth="2" />
      </svg>
    ),
  },
  {
    key: "settings",
    label: "Settings",
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
];

export default function UserSidebar({ activePage, onNavigate, isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
      <nav className="sidebar-nav">
        {MENU_ITEMS.map((item) => (
          <button
            key={item.key}
            className={`sidebar-item ${
              item.key === activePage ? "sidebar-item-active" : ""
            }`}
            onClick={() => onNavigate(item.key)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
