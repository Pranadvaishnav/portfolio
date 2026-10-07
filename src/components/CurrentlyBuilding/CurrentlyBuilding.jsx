export default function CurrentlyBuilding() {
  const tracks = [
    {
      domain: "AI / ML",
      color: "#4a9eff",
      focusLabel: "High Active Focus",
      activeProjects: [
        "LLMs From Scratch (Attention & BPE)",
        "VAE Anomaly Detection on Complex Signals",
        "EHEP Multivariate Collider Techniques"
      ],
      description:
        "Building language model architectures from the ground up to understand internal attention dynamics and representations, while researching anomaly detection in physical datasets."
    },
    {
      domain: "WEB3",
      color: "#c084fc",
      focusLabel: "Active Building Track",
      activeProjects: [
        "Decentralized Perpetual Exchange (Perigee)",
        "Foundry Fuzz Testing & Solvency Invariants",
        "FaceChain Polygon Amoy Registry"
      ],
      description:
        "Developing a modular perpetual futures exchange with peer-to-pool liquidity, funding accumulators, and liquidation keepers in Solidity 0.8.24 with 58 automated Foundry tests."
    },
    {
      domain: "FULL STACK",
      color: "#4ade80",
      focusLabel: "Continuous Engineering",
      activeProjects: [
        "Next.js 14 DEX Terminal & Candlestick Charts",
        "Express REST APIs & Prisma Schemas",
        "Dockerized CI/CD Deployment Pipelines"
      ],
      description:
        "Developing responsive trading interfaces and full-stack web applications backed by PostgreSQL, type-safe ORMs, and automated deployment infrastructure."
    }
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 16,
      }}
      className="currently-building-grid"
    >
      {tracks.map((track) => (
        <div
          key={track.domain}
          style={{
            background: "#0d0d0d",
            border: "1px solid #1a1a1a",
            borderRadius: 8,
            padding: "24px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Top header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <h3
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 14,
                fontWeight: 700,
                color: track.color,
                margin: 0,
                letterSpacing: "0.08em",
              }}
            >
              {track.domain}
            </h3>
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 8.5,
                letterSpacing: "0.1em",
                color: "#666",
                padding: "2px 8px",
                border: "1px solid #222",
                borderRadius: 10,
              }}
            >
              {track.focusLabel}
            </span>
          </div>

          <p
            style={{
              color: "#777",
              fontSize: 12.5,
              lineHeight: 1.6,
              margin: "0 0 18px",
            }}
          >
            {track.description}
          </p>

          <div style={{ marginTop: "auto", borderTop: "1px solid #161616", paddingTop: 14 }}>
            <p
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 8.5,
                letterSpacing: "0.12em",
                color: "#444",
                margin: "0 0 8px",
              }}
            >
              ACTIVE EFFORTS
            </p>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              {track.activeProjects.map((p) => (
                <li
                  key={p}
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 9.5,
                    color: "#a0a0a0",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span style={{ color: track.color, fontSize: 8 }}>›</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <style>{`
        @media (max-width: 900px) {
          .currently-building-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
