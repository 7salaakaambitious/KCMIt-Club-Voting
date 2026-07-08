import React from "react";
import { useNavigate } from "react-router";
import "./Home.css";

/* ---------- Inline icon components (no external icon library needed) ---------- */

const ShieldIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);


const MonitorIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="4" width="20" height="13" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

const PieChartIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21.2 15a9 9 0 1 1-9.2-13.2v9.2z" />
    <path d="M12 2.8V12h9.2" />
  </svg>
);

const AlertCircleIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v5M12 16h.01" />
  </svg>
);

/* ---------- Reusable action card ---------- */

function ActionCard({ icon, title, description, buttonLabel, onClick }) {
  return (
    <div className="action-card">
      <div className="action-card__header">
        <span className="action-card__icon">{icon}</span>
        <h3 className="action-card__title">{title}</h3>
      </div>

      <p className="action-card__desc">{description}</p>

      <button className="btn-primary" onClick={onClick}>
        {buttonLabel}
      </button>
    </div>
  );
}

/* ---------- Main dashboard ---------- */

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="election-page">
      <div className="election-page__inner">
        {/* Hero banner */}
        <section className="hero-banner">
          <div className="hero-banner__dashed">
            <div className="hero-banner__title-row">
              <ShieldIcon className="hero-banner__shield" />
              <h1 className="hero-banner__title">
                Welcome to KCMIT Club Election
              </h1>
            </div>

            <p className="hero-banner__lead">
              Exercise your democratic rights through a secure, transparent
              voting system.
            </p>

            <p className="hero-banner__sub">
              Your vote is completely anonymous and secured while maintaining
              full transparency.
            </p>
          </div>
        </section>

        {/* Action cards */}
        <section className="action-grid">

          <ActionCard
            icon={<MonitorIcon />}
            title="Cast your Vote"
            description="Participate in election"
            buttonLabel="Cast your Vote"
            onClick={() => navigate("/user/votings")}
          />

          <ActionCard
            icon={<PieChartIcon />}
            title="View Live Result"
            description="Real-time election result"
            buttonLabel="View Live Result"
            onClick={() => navigate("/user/results")}
          />
        </section>

        {/* Announcements */}
        <section className="announcements">
          <h2 className="announcements__title">
            Announcements & Alerts
          </h2>

          <div className="announcements__list">
            <div className="announcement-item">
              <AlertCircleIcon className="announcement-item__icon" />

              <div className="announcement-item__body">
                <h3 className="announcement-item__title">
                  President Elections 2026
                </h3>

                <p className="announcement-item__desc">
                  2026 President Election is now open. Register before it ends.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}