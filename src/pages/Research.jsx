import ResearchCard from "../components/Research/ResearchCard";
import { research } from "../data/research";

export default function Research() {
  return (
    <main style={{ paddingTop: 80 }}>
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 9,
              letterSpacing: "0.2em",
              color: "#444",
              margin: "0 0 12px",
            }}
          >
            EXPLORATIONS
          </p>
          <h1
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 700,
              color: "#e0e0e0",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Research & Experiments
          </h1>
          <p
            style={{
              color: "#555",
              fontSize: 14,
              lineHeight: 1.6,
              margin: "0 0 16px",
              maxWidth: 600,
            }}
          >
            Ongoing explorations, research interests, and technical experiments.
            These are not completed publications or finished products — each entry
            is clearly labeled with its actual status.
          </p>

          {/* Status legend */}
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 48,
            }}
          >
            {[
              { label: "RESEARCH", color: "#4a9eff", bg: "rgba(74,158,255,0.08)" },
              { label: "EXPERIMENT", color: "#a78bfa", bg: "rgba(167,139,250,0.08)" },
              { label: "EXPLORATION", color: "#fbbf24", bg: "rgba(251,191,36,0.08)" },
              { label: "INTEREST", color: "#888", bg: "rgba(136,136,136,0.06)" },
            ].map((s) => (
              <span
                key={s.label}
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 8,
                  letterSpacing: "0.12em",
                  padding: "3px 10px",
                  borderRadius: 20,
                  background: s.bg,
                  color: s.color,
                  border: `1px solid ${s.color}33`,
                }}
              >
                {s.label}
              </span>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 16,
            }}
          >
            {research.map((item) => (
              <ResearchCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
