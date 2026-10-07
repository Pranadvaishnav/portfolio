import { useRef } from "react";

const NODES = [
  { id: "core", label: "PYTHON / SOLIDITY", y: 0 },
  { id: "state", label: "DATA & ON-CHAIN", y: 1 },
  { id: "engine", label: "MODEL / CONTRACT", y: 2 },
  { id: "system", label: "SYSTEM / EVM", y: 3 },
  { id: "app", label: "FULL STACK / DAPP", y: 4 },
];

const BADGES = [
  { label: "AI", x: -95, y: 35 },
  { label: "WEB3", x: 80, y: 55 },
  { label: "ML", x: -90, y: 125 },
  { label: "DEFI", x: 85, y: 145 },
  { label: "LLMs", x: -85, y: 215 },
  { label: "FULL STACK", x: 70, y: 235 },
  { label: "RESEARCH", x: -75, y: 300 },
  { label: "EVM", x: 65, y: 320 },
];

export default function TechFlow() {
  const svgRef = useRef(null);

  const nodeH = 44;
  const gap = 28;
  const totalH = NODES.length * nodeH + (NODES.length - 1) * gap;
  const cx = 130;
  const svgW = 300;
  const svgH = totalH + 40;

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        minHeight: 400,
      }}
    >
      {/* Glow background */}
      <div
        style={{
          position: "absolute",
          width: 260,
          height: 260,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(74,158,255,0.06) 0%, rgba(168,85,247,0.04) 50%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <svg
        ref={svgRef}
        width={svgW}
        height={svgH}
        viewBox={`0 0 ${svgW} ${svgH}`}
        aria-label="Technical flow diagram connecting AI, Web3, and Full Stack"
      >
        <defs>
          <linearGradient id="flowLine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a9eff" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#c084fc" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#4ade80" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connecting lines */}
        {NODES.slice(0, -1).map((node, i) => {
          const y1 = 20 + i * (nodeH + gap) + nodeH;
          const y2 = 20 + (i + 1) * (nodeH + gap);
          return (
            <line
              key={node.id + "-line"}
              x1={cx}
              y1={y1}
              x2={cx}
              y2={y2}
              stroke="url(#flowLine)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              style={{
                animation: `flow-down 1.5s linear infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          );
        })}

        {/* Nodes */}
        {NODES.map((node, i) => {
          const y = 20 + i * (nodeH + gap);
          const isFirst = i === 0;
          const isMid = i === 2;
          const isLast = i === NODES.length - 1;

          const fill = isFirst
            ? "rgba(74,158,255,0.12)"
            : isMid
            ? "rgba(192,132,252,0.12)"
            : isLast
            ? "rgba(74,222,128,0.12)"
            : "rgba(255,255,255,0.04)";

          const stroke = isFirst
            ? "rgba(74,158,255,0.3)"
            : isMid
            ? "rgba(192,132,252,0.3)"
            : isLast
            ? "rgba(74,222,128,0.3)"
            : "rgba(255,255,255,0.08)";

          const textColor = isFirst
            ? "#4a9eff"
            : isMid
            ? "#c084fc"
            : isLast
            ? "#4ade80"
            : "#c0c0c0";

          return (
            <g key={node.id}>
              <rect
                x={cx - 72}
                y={y}
                width={144}
                height={nodeH}
                rx={4}
                fill={fill}
                stroke={stroke}
                strokeWidth={1}
              />
              <text
                x={cx}
                y={y + nodeH / 2 + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={textColor}
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 9.5,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                }}
              >
                {node.label}
              </text>
              {/* Pulse dot */}
              <circle
                cx={cx + 80}
                cy={y + nodeH / 2}
                r={3}
                fill={textColor}
                style={{
                  animation: "pulse-dot 2s ease-in-out infinite",
                  animationDelay: `${i * 0.35}s`,
                }}
              />
            </g>
          );
        })}

        {/* Floating badges */}
        {BADGES.map((badge, idx) => (
          <g
            key={badge.label}
            style={{
              animation: "float 3s ease-in-out infinite",
              animationDelay: `${(idx * 0.4) % 2}s`,
            }}
          >
            <rect
              x={cx + badge.x - 16}
              y={badge.y}
              width={34 + badge.label.length * 4.8}
              height={20}
              rx={10}
              fill="rgba(255,255,255,0.04)"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth={1}
            />
            <text
              x={cx + badge.x + (17 + (badge.label.length * 4.8) / 2) - 16}
              y={badge.y + 10}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#777"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 8,
                letterSpacing: "0.1em",
              }}
            >
              {badge.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
