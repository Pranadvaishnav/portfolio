import { useState } from "react";
import { Cpu, ShieldCheck, Layers } from "lucide-react";

const PILLARS = [
  {
    id: "ai-ml",
    title: "AI / ML",
    subtitle: "Intelligent Systems & Representations",
    icon: Cpu,
    color: "#4a9eff",
    bg: "rgba(74,158,255,0.04)",
    border: "rgba(74,158,255,0.15)",
    summary:
      "Understanding models from first principles — implementing tokenization, attention mechanisms, and deep architectures from scratch while building production-grade feature pipelines.",
    technologies: [
      "PyTorch",
      "Transformers & Attention",
      "LLMs & BPE Tokenization",
      "Deep Learning (VAEs / CNNs)",
      "LightGBM & RapidFuzz",
      "NumPy & Pandas Data Systems"
    ],
    exploring: [
      "Autonomous Protocol Agents",
      "Scientific Physics ML",
      "Multivariate Collider Analysis"
    ]
  },
  {
    id: "web3",
    title: "WEB3",
    subtitle: "Decentralized Protocols & Smart Contracts",
    icon: ShieldCheck,
    color: "#c084fc",
    bg: "rgba(192,132,252,0.04)",
    border: "rgba(192,132,252,0.15)",
    summary:
      "Engineering robust on-chain systems — designing liquidity pool vaults, perpetual margin accounting, liquidation engines, and cryptographic integrity proofs adhering to the CEI security pattern.",
    technologies: [
      "Solidity 0.8.24",
      "Foundry (Fuzz & Invariant)",
      "Smart Contracts & CEI Security",
      "EVM Mechanics",
      "DeFi Protocol Architecture",
      "Web3.py & Polygon Amoy",
      "Hardhat & Viem"
    ],
    exploring: [
      "Account Abstraction (ERC-4337)",
      "Decentralized Oracles & Pyth",
      "Zero-Knowledge Proofs"
    ]
  },
  {
    id: "fullstack",
    title: "FULL STACK",
    subtitle: "Scalable Architecture & Terminal Interfaces",
    icon: Layers,
    color: "#4ade80",
    bg: "rgba(74,222,128,0.04)",
    border: "rgba(74,222,128,0.15)",
    summary:
      "Building resilient web software — connecting high-density trading terminals and data dashboards to type-safe APIs, transactional SQL databases, and automated deployment pipelines.",
    technologies: [
      "Next.js 14 / React",
      "TypeScript & JavaScript",
      "Node.js & Express REST APIs",
      "PostgreSQL & Neon DB",
      "Prisma ORM",
      "Tailwind CSS & Recharts",
      "Docker & AWS EC2"
    ],
    exploring: [
      "High-Frequency WebSocket Streams",
      "Microservice Orchestration",
      "Edge Compute Runtimes"
    ]
  }
];

export default function Pillars() {
  const [hoveredPillar, setHoveredPillar] = useState(null);

  return (
    <section
      style={{
        padding: "60px 24px",
        borderBottom: "1px solid #141414",
        background: "linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 100%)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 9,
              letterSpacing: "0.2em",
              color: "#555",
              margin: "0 0 10px",
            }}
          >
            TECHNICAL ARCHITECTURE
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(24px, 3.5vw, 40px)",
                  fontWeight: 700,
                  color: "#e0e0e0",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                }}
              >
                Three Technical Pillars
              </h2>
            </div>
            <p
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 11,
                color: "#666",
                margin: 0,
                maxWidth: 460,
                lineHeight: 1.6,
              }}
            >
              Intelligent systems, decentralized protocols, and full-stack software — engineered from first principles.
            </p>
          </div>
        </div>

        {/* Pillars Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
          className="pillars-grid"
        >
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            const isHovered = hoveredPillar === pillar.id;

            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setHoveredPillar(pillar.id)}
                onMouseLeave={() => setHoveredPillar(null)}
                style={{
                  background: isHovered ? "#121212" : "#0d0d0d",
                  border: `1px solid ${isHovered ? pillar.border : "#1a1a1a"}`,
                  borderRadius: 8,
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.25s ease",
                  transform: isHovered ? "translateY(-3px)" : "none",
                  boxShadow: isHovered
                    ? `0 12px 30px rgba(0,0,0,0.5), 0 0 20px ${pillar.bg}`
                    : "none",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Accent top line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: `linear-gradient(90deg, ${pillar.color}, transparent)`,
                    opacity: isHovered ? 1 : 0.4,
                    transition: "opacity 0.2s",
                  }}
                />

                {/* Top strip */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        padding: 8,
                        borderRadius: 6,
                        background: pillar.bg,
                        border: `1px solid ${pillar.border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={16} style={{ color: pillar.color }} />
                    </div>
                    <h3
                      style={{
                        margin: 0,
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#f0f0f0",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                <p
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 10,
                    letterSpacing: "0.08em",
                    color: pillar.color,
                    margin: "0 0 12px",
                  }}
                >
                  {pillar.subtitle.toUpperCase()}
                </p>

                <p
                  style={{
                    color: "#777",
                    fontSize: 13,
                    lineHeight: 1.6,
                    margin: "0 0 24px",
                  }}
                >
                  {pillar.summary}
                </p>

                {/* Core Technologies */}
                <div style={{ marginTop: "auto" }}>
                  <p
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 8.5,
                      letterSpacing: "0.14em",
                      color: "#444",
                      margin: "0 0 10px",
                    }}
                  >
                    CONFIRMED STACK
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginBottom: 18,
                    }}
                  >
                    {pillar.technologies.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "JetBrains Mono, monospace",
                          fontSize: 9,
                          color: "#c0c0c0",
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid #222",
                          padding: "3px 8px",
                          borderRadius: 3,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Currently Exploring */}
                  <div style={{ borderTop: "1px solid #161616", paddingTop: 12 }}>
                    <p
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: 8,
                        letterSpacing: "0.14em",
                        color: "#555",
                        margin: "0 0 6px",
                      }}
                    >
                      CURRENTLY EXPLORING
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                      {pillar.exploring.map((exp) => (
                        <span
                          key={exp}
                          style={{
                            fontFamily: "JetBrains Mono, monospace",
                            fontSize: 8.5,
                            color: "#666",
                            fontStyle: "italic",
                          }}
                        >
                          · {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
