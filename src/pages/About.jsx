import About from "../components/About/About";
import Timeline from "../components/Timeline/Timeline";
import SocialLinks from "../components/SocialLinks/SocialLinks";

export default function AboutPage() {
  return (
    <main style={{ paddingTop: 80 }}>
      {/* About */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <About />
        </div>
      </section>

      {/* Learning path */}
      <section
        style={{
          padding: "80px 24px",
          borderTop: "1px solid #111",
          background: "#080808",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
              alignItems: "flex-start",
            }}
            className="timeline-about-grid"
          >
            <div>
              <p
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  color: "#444",
                  margin: "0 0 12px",
                }}
              >
                PROGRESSION
              </p>
              <h2
                style={{
                  margin: "0 0 16px",
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontWeight: 700,
                  color: "#e0e0e0",
                  letterSpacing: "-0.02em",
                }}
              >
                Current Learning Path
              </h2>
              <p style={{ color: "#555", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                A map of how different areas connect — not a strict timeline.
                Click each milestone to expand.
              </p>
            </div>
            <Timeline />
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .timeline-about-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Social */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid #111" }}>
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
            ELSEWHERE
          </p>
          <h2
            style={{
              margin: "0 0 32px",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 700,
              color: "#e0e0e0",
              letterSpacing: "-0.02em",
            }}
          >
            Find Me Online
          </h2>
          <SocialLinks />
        </div>
      </section>
    </main>
  );
}
