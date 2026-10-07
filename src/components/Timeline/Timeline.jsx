import { useState } from "react";

const MILESTONES = [
  {
    id: "cs",
    label: "Computer Science",
    description:
      "Enrolled in B.E./B.Tech Computer Science at Chandigarh University. Foundational exposure to programming, theory, and computer systems.",
    tags: ["C++", "Java", "Computer Organization"],
  },
  {
    id: "programming",
    label: "Programming Foundations",
    description:
      "Core programming concepts — object-oriented design, memory management, problem-solving. Building the mental models that underlie all later work.",
    tags: ["OOP", "C++", "Java"],
  },
  {
    id: "dsa",
    label: "Data Structures & Algorithms",
    description:
      "Studying core DSA: arrays, trees, graphs, sorting, searching, dynamic programming. The foundation for understanding computational complexity and system design.",
    tags: ["Algorithms", "Graph Theory", "DP", "LeetCode"],
  },
  {
    id: "fullstack",
    label: "Full-Stack Development",
    description:
      "Building complete web applications — frontend (React), backend (Node.js/Express), and database layers (PostgreSQL/Prisma). Learning how the web actually works.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
  },
  {
    id: "ml",
    label: "Machine Learning",
    description:
      "Formal ML study and hands-on projects. Understanding supervised learning, feature engineering, model evaluation, and the math underneath gradient descent.",
    tags: ["Python", "Pandas", "LightGBM", "Scikit-learn", "Statistics"],
  },
  {
    id: "dl",
    label: "Deep Learning",
    description:
      "Diving into neural networks — backpropagation, CNNs, VAEs, loss functions, training loops. PyTorch as the primary framework for experimentation.",
    tags: ["PyTorch", "Neural Networks", "VAEs", "Backprop"],
  },
  {
    id: "llms",
    label: "LLMs & Transformers",
    description:
      "Understanding language models from first principles — tokenization, attention, transformer architecture, training dynamics. Building an LLM from scratch rather than just calling an API.",
    tags: ["Transformers", "Attention", "BPE", "HuggingFace", "tiktoken"],
  },
  {
    id: "web3",
    label: "Web3 & Smart Contracts",
    description:
      "Engineering on-chain financial protocols in Solidity 0.8.24. Implementing peer-to-pool perpetual futures, collateral vaults, dynamic funding rate accumulators, and automated liquidation keeper engines with 58 automated Foundry tests.",
    tags: ["Solidity", "Foundry", "Smart Contracts", "EVM", "Viem", "DeFi"],
  },
  {
    id: "ai-web3",
    label: "AI × Web3 Convergence",
    description:
      "Investigating the intersection of intelligence and decentralization: cryptographic image integrity proofs on Polygon Amoy (FaceChain), AI-assisted DeFi analytics, and autonomous protocol agent runtimes.",
    tags: ["Polygon Amoy", "SHA-256", "FaceChain", "AI × Web3", "Web3.py"],
  },
  {
    id: "research",
    label: "Research / Scientific ML",
    description:
      "Exploring the application of ML to scientific domains — collider physics (EHEP), seismic signal processing, hyperspectral imaging. Where conventional software meets research.",
    tags: ["Physics ML", "Signal Processing", "Scientific Computing"],
  },
];

export default function Timeline() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div style={{ position: "relative" }}>
      {/* Vertical line */}
      <div
        style={{
          position: "absolute",
          left: 16,
          top: 8,
          bottom: 8,
          width: 1,
          background: "linear-gradient(#1a1a1a, #4a9eff 50%, #a78bfa)",
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {MILESTONES.map((m, i) => {
          const isExpanded = expanded === m.id;
          const isLast = i === MILESTONES.length - 1;

          return (
            <div key={m.id} style={{ position: "relative", paddingLeft: 48 }}>
              {/* Dot */}
              <div
                style={{
                  position: "absolute",
                  left: 10,
                  top: 20,
                  width: 13,
                  height: 13,
                  borderRadius: "50%",
                  background: isExpanded
                    ? "#4a9eff"
                    : isLast
                    ? "#a78bfa"
                    : "#1a1a1a",
                  border: `2px solid ${isExpanded ? "#4a9eff" : "#333"}`,
                  transition: "all 0.2s",
                  cursor: "pointer",
                }}
                onClick={() => setExpanded(isExpanded ? null : m.id)}
              />

              <button
                onClick={() => setExpanded(isExpanded ? null : m.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "left",
                  padding: "14px 0",
                  borderBottom: !isLast ? "1px solid #111" : "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    justifyContent: "space-between",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 12,
                      fontWeight: isExpanded ? 600 : 400,
                      color: isExpanded ? "#f0f0f0" : "#888",
                      margin: 0,
                      letterSpacing: "0.05em",
                      transition: "color 0.2s",
                    }}
                  >
                    {m.label}
                  </p>
                  <span
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 9,
                      color: "#333",
                    }}
                  >
                    {isExpanded ? "▲" : "▼"}
                  </span>
                </div>

                {isExpanded && (
                  <div style={{ marginTop: 12 }}>
                    <p
                      style={{
                        color: "#777",
                        fontSize: 13,
                        lineHeight: 1.6,
                        margin: "0 0 12px",
                      }}
                    >
                      {m.description}
                    </p>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {m.tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontFamily: "JetBrains Mono, monospace",
                            fontSize: 8,
                            letterSpacing: "0.08em",
                            color: "#4a9eff",
                            padding: "3px 8px",
                            border: "1px solid rgba(74,158,255,0.2)",
                            borderRadius: 2,
                            background: "rgba(74,158,255,0.06)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
