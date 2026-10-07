import { Sparkles, ArrowUpRight } from "lucide-react";

const INTERSECTIONS = [
  {
    title: "AI-Assisted DeFi Analytics & Risk Modeling",
    status: "EXPLORATION",
    statusColor: "#c084fc",
    summary:
      "Investigating how sequence models and anomaly detection (e.g. VAE architectures) can monitor automated market maker (AMM) liquidity imbalances, funding rate volatility, and cascading liquidation risks in real time.",
    tags: ["DeFi Risk", "Anomaly Detection", "Volatility Modeling", "EVM Data"]
  },
  {
    title: "Autonomous On-Chain Protocol Agents",
    status: "CURRENTLY LEARNING",
    statusColor: "#fbbf24",
    summary:
      "Exploring deterministic Python/TypeScript agent runtimes that evaluate protocol states (reserve ratios, oracle deviations) and submit automated transactions using wallet abstractions and private key enclaves.",
    tags: ["Autonomous Agents", "Keeper Bots", "Web3.py", "Smart Contracts"]
  },
  {
    title: "Decentralized AI & Cryptographic Inference Verification",
    status: "EXPLORATION",
    statusColor: "#4a9eff",
    summary:
      "Connecting deep learning feature embeddings with tamper-evident on-chain registries — explored in FaceChain where face embeddings are verified and timestamped via SHA-256 hashes on the Polygon Amoy testnet.",
    tags: ["FaceChain", "Cryptographic Hashing", "Polygon Amoy", "Integrity Proofs"]
  },
  {
    title: "Graph Analytics on Blockchain Transaction Networks",
    status: "INTEREST",
    statusColor: "#4ade80",
    summary:
      "Applying graph traversal concepts (learned through TigerGraph GSQL) to on-chain transaction graphs: modeling address networks, mixer traces, and high-velocity fund movements as property graphs.",
    tags: ["Graph Analytics", "On-Chain Forensics", "TigerGraph GSQL", "Network Traversal"]
  },
  {
    title: "Intelligent Interfaces for Complex Web3 Trading Terminals",
    status: "IN DEVELOPMENT",
    statusColor: "#f87171",
    summary:
      "Designing high-density, low-latency DEX terminal interfaces (Next.js 14 / Viem) that translate complex smart contract states, slippage models, and liquidation curves into intuitive trader experiences.",
    tags: ["Perigee DEX", "Next.js 14", "Viem", "Trader UX"]
  }
];

export default function AIWeb3() {
  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <p
          style={{
            color: "#666",
            fontSize: 14,
            lineHeight: 1.7,
            margin: 0,
            maxWidth: 640,
          }}
        >
          I am deeply curious about the convergence of intelligence and decentralization — exploring how machine learning systems and permissionless blockchains inform and enhance one another.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 16,
        }}
      >
        {INTERSECTIONS.map((item) => (
          <article
            key={item.title}
            style={{
              background: "#0d0d0d",
              border: "1px solid #1a1a1a",
              borderRadius: 8,
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              transition: "border-color 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#2a2a2a";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#1a1a1a";
              e.currentTarget.style.transform = "none";
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <span
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 8,
                  letterSpacing: "0.14em",
                  padding: "3px 9px",
                  borderRadius: 12,
                  background: `${item.statusColor}15`,
                  color: item.statusColor,
                  border: `1px solid ${item.statusColor}33`,
                  fontWeight: 600,
                }}
              >
                {item.status}
              </span>
              <Sparkles size={13} style={{ color: "#444" }} />
            </div>

            <h3
              style={{
                margin: "0 0 10px",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 13.5,
                fontWeight: 600,
                color: "#e0e0e0",
                lineHeight: 1.45,
                letterSpacing: "-0.01em",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#777",
                fontSize: 12.5,
                lineHeight: 1.6,
                margin: "0 0 18px",
                flexGrow: 1,
              }}
            >
              {item.summary}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {item.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 8.5,
                    color: "#555",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid #1a1a1a",
                    padding: "2px 7px",
                    borderRadius: 2,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
