// DashboardLayout.jsx
// -----------------------------------------------------------
// The "frame" of the whole admin dashboard.
// Puts the Navbar on top, Sidebar on the left, and whatever
// "page" is active in the main content area.
//
// RESPONSIVE BEHAVIOUR:
//   - Desktop (>= 769px): Sidebar is always visible on the left.
//   - Mobile  (<= 768px): Sidebar slides in from the left when
//     the hamburger (☰) button is tapped. Tapping the dark
//     overlay behind it (or navigating to a page) closes it again.
//
// We keep "sidebarOpen" state here so that:
//   - Navbar can receive a toggle function to show the ☰ button.
//   - Sidebar receives it so navigating auto-closes the panel.
// -----------------------------------------------------------

import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./DashboardLayout.css";

export default function DashboardLayout({ activePage, onNavigate, children }) {
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
      <Navbar onMenuToggle={() => setSidebarOpen((prev) => !prev)} />

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
        <Sidebar
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
