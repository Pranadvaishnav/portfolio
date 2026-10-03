import TechStack from "../components/TechStack/TechStack";

export default function Stack() {
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
            CAPABILITIES
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
            Technical Stack
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
            Technologies I've used across projects. Highlighted ones have linked
            projects — click them to see where each tool was applied.
          </p>
          <TechStack />
        </div>
      </section>
    </main>
  );
}
