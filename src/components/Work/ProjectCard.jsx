import { useState } from "react";
import { ExternalLink } from "lucide-react";

// Category → badge style mapping
const BADGE_STYLES = {
  ML: { bg: "rgba(74,158,255,0.12)", color: "#4a9eff", border: "rgba(74,158,255,0.2)" },
  LLM: { bg: "rgba(167,139,250,0.12)", color: "#a78bfa", border: "rgba(167,139,250,0.2)" },
  WEB3: { bg: "rgba(168,85,247,0.12)", color: "#c084fc", border: "rgba(168,85,247,0.2)" },
  FULLSTACK: { bg: "rgba(74,222,128,0.12)", color: "#4ade80", border: "rgba(74,222,128,0.2)" },
  DEVOPS: { bg: "rgba(249,115,22,0.12)", color: "#fb923c", border: "rgba(249,115,22,0.2)" },
  DATA: { bg: "rgba(251,191,36,0.12)", color: "#fbbf24", border: "rgba(251,191,36,0.2)" },
  SCIENCE: { bg: "rgba(248,113,113,0.12)", color: "#f87171", border: "rgba(248,113,113,0.2)" },
  RESEARCH: { bg: "rgba(232,224,208,0.1)", color: "#e8e0d0", border: "rgba(232,224,208,0.15)" },
};

function Badge({ category, label }) {
  const s = BADGE_STYLES[category] || BADGE_STYLES.RESEARCH;
  return (
    <span
      style={{
        display: "inline-block",
        padding: "3px 10px",
        borderRadius: 20,
        background: s.bg,
        color: s.color,
        border: `1px solid ${s.border}`,
        fontFamily: "JetBrains Mono, monospace",
        fontSize: 9,
        letterSpacing: "0.12em",
        fontWeight: 600,
      }}
    >
      {label}
    </span>
  );
}

export function ProjectCard({ project, onOpen, featured = false }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onOpen(project)}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#141414" : "#0f0f0f",
        border: `1px solid ${hovered ? "#2a2a2a" : "#1a1a1a"}`,
        borderRadius: 8,
        padding: featured ? "32px" : "24px",
        cursor: "pointer",
        transition: "all 0.2s",
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered ? "0 8px 32px rgba(0,0,0,0.4)" : "none",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        outline: "none",
        position: "relative",
        overflow: "hidden",
      }}
      aria-label={`Open ${project.title} project`}
    >
      {/* Hover accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background:
            project.category === "ML"
              ? "linear-gradient(90deg, #4a9eff, transparent)"
              : project.category === "LLM"
              ? "linear-gradient(90deg, #a78bfa, transparent)"
              : project.category === "WEB3"
              ? "linear-gradient(90deg, #c084fc, transparent)"
              : project.category === "FULLSTACK"
              ? "linear-gradient(90deg, #4ade80, transparent)"
              : project.category === "DEVOPS"
              ? "linear-gradient(90deg, #fb923c, transparent)"
              : project.category === "DATA"
              ? "linear-gradient(90deg, #fbbf24, transparent)"
              : project.category === "SCIENCE"
              ? "linear-gradient(90deg, #f87171, transparent)"
              : "linear-gradient(90deg, #888, transparent)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.2s",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Badge category={project.category} label={project.categoryLabel} />
          {project.featured && (
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 9,
                letterSpacing: "0.1em",
                color: "#444",
              }}
            >
              FEATURED
            </span>
          )}
        </div>
        <ExternalLink
          size={14}
          style={{
            color: hovered ? "#888" : "#333",
            transition: "color 0.2s",
            flexShrink: 0,
          }}
        />
      </div>

      <div>
        <h3
          style={{
            margin: "0 0 8px",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: featured ? 18 : 15,
            fontWeight: 600,
            color: "#e0e0e0",
            letterSpacing: "-0.01em",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            margin: 0,
            color: "#666",
            fontSize: 13,
            lineHeight: 1.6,
          }}
        >
          {project.tagline}
        </p>
      </div>

      {/* Mini pipeline preview */}
      {project.pipeline && (
        <div
          style={{
            display: "flex",
            gap: 6,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {project.pipeline.slice(0, 4).map((node, i) => (
            <span key={node.id} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 8,
                  letterSpacing: "0.1em",
                  color: "#444",
                  padding: "2px 6px",
                  border: "1px solid #222",
                  borderRadius: 2,
                }}
              >
                {node.label}
              </span>
              {i < Math.min(project.pipeline.length, 4) - 1 && (
                <span style={{ color: "#333", fontSize: 8 }}>→</span>
              )}
            </span>
          ))}
          {project.pipeline.length > 4 && (
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 8,
                color: "#333",
              }}
            >
              +{project.pipeline.length - 4}
            </span>
          )}
        </div>
      )}

      {/* Tech tags */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: "auto" }}>
        {project.technologies.slice(0, 5).map((tech) => (
          <span
            key={tech}
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 9,
              color: "#555",
              padding: "2px 8px",
              border: "1px solid #1a1a1a",
              borderRadius: 2,
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
