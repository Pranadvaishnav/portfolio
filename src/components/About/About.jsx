export default function About() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 60,
        alignItems: "flex-start",
      }}
      className="about-grid"
    >
      {/* Left */}
      <div>
        <p
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 9,
            letterSpacing: "0.2em",
            color: "#444",
            margin: "0 0 16px",
          }}
        >
          ABOUT
        </p>
        <h2
          style={{
            margin: "0 0 24px",
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 700,
            color: "#e0e0e0",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          I like understanding how things work.
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <p style={{ color: "#777", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
            I'm a Computer Science student at Chandigarh University interested in the
            intersection of machine learning, software engineering, and scientific
            computing. I'm drawn to problems that require understanding systems
            deeply rather than just applying abstractions.
          </p>
          <p style={{ color: "#777", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
            My work spans AI and ML (entity resolution, anomaly detection, LLMs),
            full-stack development (React/Node.js applications), graph analytics,
            and scientific data processing. I try to engage with each domain from
            first principles — which is why projects like building an LLM from
            scratch matter to me.
          </p>
          <p style={{ color: "#777", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
            I'm also genuinely curious about research — particularly applying ML
            to physics and scientific datasets, where the structure of the problem
            is very different from conventional business ML. These interests are
            early-stage explorations, not completed projects, and I'm clear about
            that distinction.
          </p>
        </div>

        {/* Philosophy */}
        <div
          style={{
            marginTop: 32,
            padding: "20px 24px",
            border: "1px solid #1a1a1a",
            borderLeft: "3px solid #4a9eff",
            borderRadius: "0 4px 4px 0",
            background: "rgba(74,158,255,0.03)",
          }}
        >
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 9,
              letterSpacing: "0.14em",
              color: "#4a9eff",
              margin: "0 0 8px",
            }}
          >
            PHILOSOPHY
          </p>
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 14,
              color: "#c0c0c0",
              margin: 0,
              letterSpacing: "0.02em",
            }}
          >
            Build → Break → Understand → Improve
          </p>
        </div>
      </div>

      {/* Right */}
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {/* Education card */}
        <div
          style={{
            border: "1px solid #1a1a1a",
            borderRadius: 8,
            padding: "24px",
            background: "#0d0d0d",
          }}
        >
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 9,
              letterSpacing: "0.14em",
              color: "#444",
              margin: "0 0 16px",
            }}
          >
            EDUCATION
          </p>
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 16,
              fontWeight: 700,
              color: "#d0d0d0",
              margin: "0 0 4px",
            }}
          >
            Chandigarh University
          </p>
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11,
              color: "#666",
              margin: "0 0 4px",
            }}
          >
            B.E./B.Tech — Computer Science
          </p>
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 10,
              color: "#444",
              margin: 0,
            }}
          >
            Expected May 2028
          </p>

          <div
            style={{
              marginTop: 20,
              paddingTop: 20,
              borderTop: "1px solid #1a1a1a",
            }}
          >
            <p
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 9,
                letterSpacing: "0.12em",
                color: "#333",
                margin: "0 0 12px",
              }}
            >
              RELEVANT COURSEWORK
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {[
                "Data Structures & Algorithms",
                "Object-Oriented Programming",
                "Computer Organization",
                "Machine Learning",
                "Artificial Intelligence",
                "Statistics & Applications",
                "Operating Systems",
                "Software Engineering",
              ].map((c) => (
                <span
                  key={c}
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 9,
                    color: "#555",
                    padding: "3px 8px",
                    border: "1px solid #1a1a1a",
                    borderRadius: 2,
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Interests summary */}
        <div
          style={{
            border: "1px solid #1a1a1a",
            borderRadius: 8,
            padding: "24px",
            background: "#0d0d0d",
          }}
        >
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 9,
              letterSpacing: "0.14em",
              color: "#444",
              margin: "0 0 16px",
            }}
          >
            AREAS OF INTEREST
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { label: "Artificial Intelligence", note: "ML, LLMs, deep learning" },
              { label: "Software Engineering", note: "full-stack, systems" },
              { label: "Research / Scientific ML", note: "physics, signals, data" },
              { label: "Algorithms", note: "DSA, complexity, problem-solving" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 11,
                    color: "#c0c0c0",
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 9,
                    color: "#444",
                  }}
                >
                  {item.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
