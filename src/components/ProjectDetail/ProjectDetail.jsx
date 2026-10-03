import { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import { GithubIcon } from "../icons";

const BADGE_STYLES = {
  ML: { bg: "rgba(74,158,255,0.12)", color: "#4a9eff", border: "rgba(74,158,255,0.2)" },
  LLM: { bg: "rgba(167,139,250,0.12)", color: "#a78bfa", border: "rgba(167,139,250,0.2)" },
  FULLSTACK: { bg: "rgba(74,222,128,0.12)", color: "#4ade80", border: "rgba(74,222,128,0.2)" },
  DATA: { bg: "rgba(251,191,36,0.12)", color: "#fbbf24", border: "rgba(251,191,36,0.2)" },
  SCIENCE: { bg: "rgba(248,113,113,0.12)", color: "#f87171", border: "rgba(248,113,113,0.2)" },
};

function SectionLabel({ children }) {
  return (
    <p
      style={{
        fontFamily: "JetBrains Mono, monospace",
        fontSize: 9,
        letterSpacing: "0.15em",
        color: "#444",
        margin: "0 0 12px",
      }}
    >
      {children}
    </p>
  );
}

function Pipeline({ pipeline, tooltips }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0, alignSelf: "flex-start" }}>
      {pipeline.map((node, i) => (
        <div key={node.id}>
          <div
            className="pipeline-node"
            title={node.description}
            style={{
              padding: "10px 16px",
              border: "1px solid #222",
              borderRadius: 4,
              cursor: "default",
              position: "relative",
            }}
          >
            <p
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 10,
                letterSpacing: "0.1em",
                color: "#c0c0c0",
                margin: "0 0 4px",
                fontWeight: 600,
              }}
            >
              {node.label}
            </p>
            <p
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 9,
                color: "#555",
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              {node.description}
            </p>
          </div>
          {i < pipeline.length - 1 && (
            <div
              style={{
                width: 1,
                height: 16,
                background: "linear-gradient(#2a2a2a, #1a1a1a)",
                margin: "0 0 0 24px",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function ProjectDetail({ project, onClose }) {
  const badge = BADGE_STYLES[project.category];

  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "32px 16px",
        overflowY: "auto",
      }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(4px)",
        }}
      />

      <article
        style={{
          position: "relative",
          background: "#0f0f0f",
          border: "1px solid #222",
          borderRadius: 12,
          width: "100%",
          maxWidth: 900,
          padding: "40px",
          zIndex: 1,
        }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: "none",
            border: "1px solid #222",
            borderRadius: 4,
            color: "#666",
            cursor: "pointer",
            padding: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#f0f0f0";
            e.currentTarget.style.borderColor = "#444";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#666";
            e.currentTarget.style.borderColor = "#222";
          }}
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          {badge && (
            <span
              style={{
                display: "inline-block",
                padding: "3px 10px",
                borderRadius: 20,
                background: badge.bg,
                color: badge.color,
                border: `1px solid ${badge.border}`,
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 9,
                letterSpacing: "0.12em",
                marginBottom: 16,
              }}
            >
              {project.categoryLabel}
            </span>
          )}
          <h2
            style={{
              margin: "0 0 8px",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 24,
              fontWeight: 700,
              color: "#f0f0f0",
              letterSpacing: "-0.01em",
            }}
          >
            {project.title}
          </h2>
          <p style={{ color: "#777", fontSize: 14, margin: 0, lineHeight: 1.6 }}>
            {project.tagline}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 280px",
            gap: 40,
          }}
          className="detail-grid"
        >
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {project.description && (
              <div>
                <SectionLabel>OVERVIEW</SectionLabel>
                <p style={{ color: "#888", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                  {project.description}
                </p>
              </div>
            )}

            {project.problem && (
              <div>
                <SectionLabel>PROBLEM</SectionLabel>
                <p style={{ color: "#888", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                  {project.problem}
                </p>
              </div>
            )}

            {project.approach && (
              <div>
                <SectionLabel>APPROACH</SectionLabel>
                <p style={{ color: "#888", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                  {project.approach}
                </p>
              </div>
            )}

            {project.highlights && (
              <div>
                <SectionLabel>KEY ASPECTS</SectionLabel>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      style={{
                        display: "flex",
                        gap: 10,
                        color: "#777",
                        fontSize: 13,
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ color: "#333", flexShrink: 0 }}>â€”</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.learnings && (
              <div>
                <SectionLabel>KEY LEARNINGS</SectionLabel>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {project.learnings.map((l) => (
                    <li
                      key={l}
                      style={{
                        display: "flex",
                        gap: 10,
                        color: "#777",
                        fontSize: 13,
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ color: "#4a9eff", flexShrink: 0 }}>â†’</span>
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {project.pipeline && (
              <div>
                <SectionLabel>TECHNICAL PIPELINE</SectionLabel>
                <Pipeline pipeline={project.pipeline} tooltips={project.pipelineTooltips} />
              </div>
            )}

            {project.technologies && (
              <div>
                <SectionLabel>TECHNOLOGIES</SectionLabel>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: 9,
                        color: "#666",
                        padding: "4px 10px",
                        border: "1px solid #222",
                        borderRadius: 2,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    color: "#888",
                    textDecoration: "none",
                    padding: "10px 16px",
                    border: "1px solid #222",
                    borderRadius: 4,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#f0f0f0";
                    e.currentTarget.style.borderColor = "#444";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#888";
                    e.currentTarget.style.borderColor = "#222";
                  }}
                >
                  <GithubIcon size={13} />
                  VIEW ON GITHUB â†—
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    color: "#888",
                    textDecoration: "none",
                    padding: "10px 16px",
                    border: "1px solid #222",
                    borderRadius: 4,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#f0f0f0";
                    e.currentTarget.style.borderColor = "#444";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#888";
                    e.currentTarget.style.borderColor = "#222";
                  }}
                >
                  <ExternalLink size={13} />
                  LIVE DEMO â†—
                </a>
              )}
            </div>
          </div>
        </div>
      </article>

      <style>{`
        @media (max-width: 720px) {
          .detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

