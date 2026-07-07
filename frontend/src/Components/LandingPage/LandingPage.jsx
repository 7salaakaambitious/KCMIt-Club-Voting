import { Link } from "react-router";
import "./LandingPage.css";
import logo from "./logo.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="KCMIT Logo" className="navbar-logo" />
        <span className="navbar-title">KCMIT Club Election</span>
      </div>

      <nav className="navbar-right">
        <a href="#home" className="nav-link nav-link-active">
          Home
        </a>
        <Link to="/signup" className="login-button">
          Sign Up
        </Link>

        <Link to="/login" className="login-button">
          Login
        </Link>
        

      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">
        Empowering Your Voice in <br />
        KCMIT Club Elections
      </h1>

      <p className="hero-subtitle">
        Exercise your democratic rights through a secure, transparent, and
        private voting system. Your vote is anonymous and secured by
        zero-knowledge proofs.
      </p>

      <Link to="/signup" className="get-started-button">
        Get Started
      </Link>
    </section>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-text">{text}</p>
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
      <path d="M12 2L4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3z" />
    </svg>
  );
}

function PieChartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="icon-svg">
      <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.35" />
      <path d="M12 3a9 9 0 0 1 9 9h-9V3z" fill="currentColor" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" />
    </svg>
  );
}

function Features() {
  return (
    <section className="features">
      <FeatureCard
        icon={<ShieldIcon />}
        title="Secure Voting"
        text="State-of-the-art encryption ensures your vote is safe and confidential."
      />
      <FeatureCard
        icon={<PieChartIcon />}
        title="Real-time Results"
        text="View election progress and final results instantly as they happen."
      />
      <FeatureCard
        icon={<PersonIcon />}
        title="Easy Registration"
        text="Quick and simple voter registration process for all eligible members."
      />
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 KCMIT Club Election. All rights reserved.</p>
    </footer>
  );
}

function LandingPage() {
  return (
    <main className="page" id="home">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}

export default LandingPage;
