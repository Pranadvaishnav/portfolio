import { useState } from "react";
import { research } from "../../data/research";

const STATUS_STYLES = {
  research: { color: "#4a9eff", border: "rgba(74,158,255,0.2)", bg: "rgba(74,158,255,0.08)" },
  experiment: { color: "#a78bfa", border: "rgba(167,139,250,0.2)", bg: "rgba(167,139,250,0.08)" },
  exploration: { color: "#fbbf24", border: "rgba(251,191,36,0.2)", bg: "rgba(251,191,36,0.08)" },
  interest: { color: "#888", border: "rgba(136,136,136,0.2)", bg: "rgba(136,136,136,0.06)" },
};

export default function ResearchCard({ item }) {
  const [expanded, setExpanded] = useState(false);
  const s = STATUS_STYLES[item.status] || STATUS_STYLES.interest;

  return (
    <article
      style={{
        border: "1px solid #1a1a1a",
        borderRadius: 8,
        padding: "24px",
        background: "#0d0d0d",
        transition: "border-color 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1a1a1a")}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 12,
          marginBottom: 12,
        }}
      >
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 8,
            letterSpacing: "0.14em",
            padding: "3px 10px",
            borderRadius: 20,
            background: s.bg,
            color: s.color,
            border: `1px solid ${s.border}`,
          }}
        >
          {item.statusLabel}
        </span>
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 8,
            letterSpacing: "0.1em",
            color: "#444",
          }}
        >
          {item.area.toUpperCase()}
        </span>
      </div>

      <h3
        style={{
          margin: "0 0 10px",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 14,
          fontWeight: 600,
          color: "#d0d0d0",
          letterSpacing: "-0.01em",
          lineHeight: 1.4,
        }}
      >
        {item.title}
      </h3>

      <p
        style={{
          color: "#666",
          fontSize: 13,
          lineHeight: 1.6,
          margin: "0 0 16px",
          display: expanded ? "block" : "-webkit-box",
          WebkitLineClamp: expanded ? "unset" : 3,
          WebkitBoxOrient: "vertical",
          overflow: expanded ? "visible" : "hidden",
        }}
      >
        {item.description}
      </p>

      {/* Concepts */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
        {item.concepts.map((c) => (
          <span
            key={c}
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 8,
              letterSpacing: "0.08em",
              color: "#444",
              padding: "3px 8px",
              border: "1px solid #1a1a1a",
              borderRadius: 2,
            }}
          >
            {c}
          </span>
        ))}
      </div>

      {item.note && (
        <p
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 9,
            color: "#333",
            margin: "8px 0 0",
            fontStyle: "italic",
          }}
        >
          * {item.note}
        </p>
      )}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            background: "none",
            border: "none",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 9,
            letterSpacing: "0.1em",
            color: "#444",
            cursor: "pointer",
            padding: "8px 0 0",
            display: "block",
          }}
        >
          {expanded ? "COLLAPSE ↑" : "READ MORE ↓"}
        </button>
        {item.github && (
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 9,
              letterSpacing: "0.1em",
              color: "#4a9eff",
              textDecoration: "none",
              padding: "4px 10px",
              border: "1px solid rgba(74,158,255,0.2)",
              borderRadius: 4,
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            REPO ↗
          </a>
        )}
      </div>
    </article>
  );
}
