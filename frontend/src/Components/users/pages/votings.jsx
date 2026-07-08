import React, { useMemo, useState } from "react";
import "./Votings.css";

/* ============================================================
   Inline icons (no external icon library needed)
   ============================================================ */

const CrownIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m2 18 2-11 5 5 3-7 3 7 5-5 2 11z" />
    <path d="M2 18h20" />
  </svg>
);

const StarIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
  </svg>
);

const BookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const ArrowLeftIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

const CheckCircleIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 11.1V12a10 10 0 1 1-5.9-9.1" />
    <path d="m22 4-10 10.01-3-3" />
  </svg>
);

const ChevronRightIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

/* ============================================================
   Sample data — swap this out for real candidates / an API call
   ============================================================ */

const POSITIONS = [
  {
    id: "president",
    name: "President",
    icon: CrownIcon,
    description: "Leads the club and represents members to the college administration.",
  },
  {
    id: "vp",
    name: "Vice President",
    icon: StarIcon,
    description: "Supports the president and oversees committee operations.",
  },
  {
    id: "secretary",
    name: "Secretary",
    icon: BookIcon,
    description: "Maintains records, minutes, and official club communication.",
  },
];

const CANDIDATES = {
  president: [
    {
      id: "p1",
      name: "Aarav Sharma",
      tagline: "Building a stronger, louder club voice",
      bio: "Third-year Computer Engineering student, current class representative, and organizer of two successful hackathons on campus.",
      manifesto:
        "Plans to introduce monthly open forums, a transparent budget tracker, and a mentorship pipeline connecting juniors with alumni.",
    },
    {
      id: "p2",
      name: "Priya Gurung",
      tagline: "Transparency and student-first leadership",
      bio: "Outgoing General Secretary with two years of committee experience and a track record of running fair, well-documented elections.",
      manifesto:
        "Wants to publish every decision and expense publicly, run quarterly satisfaction surveys, and expand club funding for workshops.",
    },
    {
      id: "p3",
      name: "Rohan Thapa",
      tagline: "Experience meets innovation",
      bio: "Former Treasurer who managed the club's largest annual budget to date and led the sponsorship drive for last year's tech fest.",
      manifesto:
        "Focused on securing more industry sponsorships, upgrading club equipment, and launching a peer-tutoring initiative.",
    },
  ],
  vp: [
    {
      id: "v1",
      name: "Sita Karki",
      tagline: "Empowering every committee",
      bio: "Leads the design committee and has coordinated logistics for every major club event over the past year.",
      manifesto:
        "Aims to give each sub-committee its own budget line and a direct monthly check-in with leadership.",
    },
    {
      id: "v2",
      name: "Bikash Rai",
      tagline: "Bridging students and faculty",
      bio: "Active member of the student union liaison team, experienced in coordinating between faculty and student groups.",
      manifesto:
        "Plans to set up a faculty-student advisory session every semester to fast-track club proposals.",
    },
  ],
  secretary: [
    {
      id: "s1",
      name: "Anjali Shrestha",
      tagline: "Organized, transparent, accountable",
      bio: "Currently assistant secretary; maintains meeting minutes and manages the club's shared documentation archive.",
      manifesto:
        "Will digitize all records into a searchable archive and send a member newsletter after every meeting.",
    },
    {
      id: "s2",
      name: "Kiran Bhattarai",
      tagline: "Clear records, clear communication",
      bio: "Runs the club's social media and has handled member communications for the past two semesters.",
      manifesto:
        "Wants same-day meeting summaries and a single shared calendar for all club activities and deadlines.",
    },
  ],
};

/* ============================================================
   Small building blocks
   ============================================================ */

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Avatar({ name, size = "md" }) {
  return (
    <div className={`avatar avatar--${size}`} aria-hidden="true">
      {initials(name)}
    </div>
  );
}

function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <React.Fragment key={item.label}>
          {i > 0 && <ChevronRightIcon className="breadcrumb__chevron" />}
          {item.onClick ? (
            <button type="button" className="breadcrumb__link" onClick={item.onClick}>
              {item.label}
            </button>
          ) : (
            <span className="breadcrumb__current">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

/* ============================================================
   Screen 1 — position selection
   ============================================================ */

function PositionGrid({ votes, onSelect }) {
  return (
    <section aria-label="Select a position">
      <h1 className="page-title">Cast Your Vote</h1>
      <p className="page-subtitle">
        Choose a position to view its candidates. You can vote once per position.
      </p>

      <div className="position-grid">
        {POSITIONS.map((position) => {
          const Icon = position.icon;
          const candidateCount = CANDIDATES[position.id].length;
          const hasVoted = Boolean(votes[position.id]);

          return (
            <button
              type="button"
              key={position.id}
              className="position-card"
              onClick={() => onSelect(position.id)}
            >
              {hasVoted && (
                <span className="badge badge--voted">
                  <CheckCircleIcon className="badge__icon" />
                  Voted
                </span>
              )}
              <span className="position-card__icon">
                <Icon />
              </span>
              <h3 className="position-card__title">{position.name}</h3>
              <p className="position-card__desc">{position.description}</p>
              <span className="position-card__meta">{candidateCount} candidates running</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

/* ============================================================
   Screen 2 — candidate list for a chosen position
   ============================================================ */

function CandidateGrid({ position, candidates, votedCandidateId, onBack, onOpenProfile }) {
  const votedCandidate = candidates.find((c) => c.id === votedCandidateId);

  return (
    <section aria-label={`Candidates for ${position.name}`}>
      <Breadcrumb
        items={[
          { label: "Positions", onClick: onBack },
          { label: position.name },
        ]}
      />

      <button type="button" className="back-link" onClick={onBack}>
        <ArrowLeftIcon />
        Back to positions
      </button>

      <h1 className="page-title">{position.name} candidates</h1>
      <p className="page-subtitle">
        Select a candidate to read their profile and manifesto before voting.
      </p>

      {votedCandidate && (
        <div className="voted-banner">
          <CheckCircleIcon className="voted-banner__icon" />
          You voted for <strong>&nbsp;{votedCandidate.name}&nbsp;</strong> for {position.name}.
        </div>
      )}

      <div className="candidate-grid">
        {candidates.map((candidate) => {
          const isWinner = candidate.id === votedCandidateId;
          return (
            <button
              type="button"
              key={candidate.id}
              className={`candidate-card${isWinner ? " candidate-card--voted" : ""}`}
              onClick={() => onOpenProfile(candidate)}
            >
              {isWinner && (
                <span className="badge badge--voted badge--corner">
                  <CheckCircleIcon className="badge__icon" />
                  Voted
                </span>
              )}
              <Avatar name={candidate.name} size="lg" />
              <h3 className="candidate-card__name">{candidate.name}</h3>
              <p className="candidate-card__tagline">{candidate.tagline}</p>
              <span className="link-affordance">View profile</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

/* ============================================================
   Screen 3 — candidate profile / vote modal
   ============================================================ */

function CandidateModal({ candidate, position, hasVotedForThis, positionIsLocked, stage, onRequestVote, onConfirm, onCancelConfirm, onClose }) {
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label={`${candidate.name} profile`}>
      <div className="modal">
        <button type="button" className="modal__close" onClick={onClose} aria-label="Close">
          <XIcon />
        </button>

        {stage === "success" ? (
          <div className="modal__success">
            <span className="modal__success-icon">
              <CheckCircleIcon />
            </span>
            <h2 className="modal__success-title">Vote recorded</h2>
            <p className="modal__success-text">
              Your vote for <strong>{candidate.name}</strong> as {position.name} has been
              submitted anonymously.
            </p>
            <button type="button" className="btn-primary" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="modal__header">
              <Avatar name={candidate.name} size="xl" />
              <div>
                <h2 className="modal__name">{candidate.name}</h2>
                <span className="modal__position-tag">Running for {position.name}</span>
              </div>
            </div>

            <div className="modal__section">
              <h3 className="modal__section-title">About</h3>
              <p className="modal__section-text">{candidate.bio}</p>
            </div>

            <div className="modal__section">
              <h3 className="modal__section-title">Manifesto</h3>
              <p className="modal__section-text">{candidate.manifesto}</p>
            </div>

            {stage === "confirm" ? (
              <div className="modal__confirm">
                <p className="modal__confirm-text">
                  Vote for <strong>{candidate.name}</strong> as {position.name}? This can't be
                  changed once submitted.
                </p>
                <div className="modal__confirm-actions">
                  <button type="button" className="btn-secondary" onClick={onCancelConfirm}>
                    Cancel
                  </button>
                  <button type="button" className="btn-primary" onClick={onConfirm}>
                    Confirm vote
                  </button>
                </div>
              </div>
            ) : (
              <div className="modal__footer">
                {hasVotedForThis ? (
                  <span className="modal__voted-note">
                    <CheckCircleIcon className="modal__voted-note-icon" />
                    You voted for this candidate
                  </span>
                ) : positionIsLocked ? (
                  <span className="modal__locked-note">
                    Voting is closed for {position.name} — you already voted.
                  </span>
                ) : (
                  <button type="button" className="btn-primary btn-block" onClick={onRequestVote}>
                    Vote for {candidate.name}
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

/* ============================================================
   Main component
   ============================================================ */

export default function Votings({ onBackToDashboard }) {
  const [view, setView] = useState("positions"); // 'positions' | 'candidates'
  const [selectedPositionId, setSelectedPositionId] = useState(null);
  const [profileCandidate, setProfileCandidate] = useState(null);
  const [modalStage, setModalStage] = useState("profile"); // 'profile' | 'confirm' | 'success'
  const [votes, setVotes] = useState({}); // { president: 'p2', vp: null, secretary: 's1' }

  const selectedPosition = useMemo(
    () => POSITIONS.find((p) => p.id === selectedPositionId) || null,
    [selectedPositionId]
  );

  function openPosition(positionId) {
    setSelectedPositionId(positionId);
    setView("candidates");
  }

  function backToPositions() {
    setView("positions");
    setSelectedPositionId(null);
  }

  function openProfile(candidate) {
    setProfileCandidate(candidate);
    setModalStage("profile");
  }

  function closeModal() {
    setProfileCandidate(null);
    setModalStage("profile");
  }

  function confirmVote() {
    setVotes((prev) => ({ ...prev, [selectedPositionId]: profileCandidate.id }));
    setModalStage("success");
  }

  return (
    <div className="voting-page">
      <div className="voting-page__inner">
        {onBackToDashboard && (
          <button type="button" className="back-link back-link--top" onClick={onBackToDashboard}>
            <ArrowLeftIcon />
            Back to dashboard
          </button>
        )}

        {view === "positions" && (
          <PositionGrid votes={votes} onSelect={openPosition} />
        )}

        {view === "candidates" && selectedPosition && (
          <CandidateGrid
            position={selectedPosition}
            candidates={CANDIDATES[selectedPosition.id]}
            votedCandidateId={votes[selectedPosition.id]}
            onBack={backToPositions}
            onOpenProfile={openProfile}
          />
        )}

        {profileCandidate && selectedPosition && (
          <CandidateModal
            candidate={profileCandidate}
            position={selectedPosition}
            stage={modalStage}
            hasVotedForThis={votes[selectedPosition.id] === profileCandidate.id}
            positionIsLocked={Boolean(votes[selectedPosition.id])}
            onRequestVote={() => setModalStage("confirm")}
            onConfirm={confirmVote}
            onCancelConfirm={() => setModalStage("profile")}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
}
