import ProjectGrid from "../components/Work/ProjectGrid";

export default function Work() {
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
            PORTFOLIO
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
            Selected Work
          </h1>
          <p
            style={{
              color: "#555",
              fontSize: 14,
              lineHeight: 1.6,
              margin: "0 0 56px",
              maxWidth: 560,
            }}
          >
            Projects across AI/ML, full-stack development, graph analytics, and
            scientific computing. Click any card for the full technical breakdown.
          </p>
          <ProjectGrid />
        </div>
      </section>
    </main>
  );
}
