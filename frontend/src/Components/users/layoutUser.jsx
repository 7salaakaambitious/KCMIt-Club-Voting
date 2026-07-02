import { useState } from "react";
import NavbarUser from "./navbarUser";
import UserSidebar from "./sidebar";
import "./layoutUser.css";


export default function UserLayout({ activePage, onNavigate, children }) {
  // Controls whether the sidebar drawer is open on mobile.
  // On desktop this value is ignored because CSS always shows the sidebar.
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Called when the user picks a new page from the sidebar.
  // We close the mobile drawer first, then tell the parent (App.jsx)
  // which page was chosen.
  function handleNavigate(page) {
    setSidebarOpen(false);
    onNavigate(page);
  }

  return (
    <div className="dashboard">
      {/* Top bar — passes the toggle function so it can show ☰ on mobile */}
      <NavbarUser onMenuToggle={() => setSidebarOpen((prev) => !prev)} />

      <div className="dashboard-body">
        {/* Dark overlay — only visible on mobile when sidebar is open.
            Tapping it closes the sidebar. */}
        {sidebarOpen && (
          <div
            className="sidebar-overlay"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar — gets "sidebarOpen" so CSS can slide it in/out on mobile */}
        <UserSidebar
          activePage={activePage}
          onNavigate={handleNavigate}
          isOpen={sidebarOpen}
        />

        {/* Main content — this is the only part that changes per page */}
        <main className="dashboard-main">{children}</main>
      </div>
    </div>
  );
}
