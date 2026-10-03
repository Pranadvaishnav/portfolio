import { useEffect, useRef } from "react";

const NODES = [
  { id: "python", label: "PYTHON", y: 0 },
  { id: "data", label: "DATA", y: 1 },
  { id: "model", label: "MODEL", y: 2 },
  { id: "system", label: "SYSTEM", y: 3 },
  { id: "application", label: "APPLICATION", y: 4 },
];

const BADGES = [
  { label: "AI", x: -90, y: 40 },
  { label: "ML", x: -85, y: 140 },
  { label: "LLMs", x: 60, y: 60 },
  { label: "WEB", x: 65, y: 170 },
  { label: "DATA", x: -80, y: 240 },
  { label: "RESEARCH", x: 50, y: 280 },
];

export default function TechFlow() {
  const svgRef = useRef(null);

  const nodeH = 44;
  const gap = 28;
  const totalH = NODES.length * nodeH + (NODES.length - 1) * gap;
  const cx = 120;
  const svgW = 280;
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
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(74,158,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <svg
        ref={svgRef}
        width={svgW}
        height={svgH}
        viewBox={`0 0 ${svgW} ${svgH}`}
        aria-label="Technical flow diagram"
      >
        <defs>
          <linearGradient id="flowLine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a9eff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.3" />
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
          const isLast = i === NODES.length - 1;
          return (
            <g key={node.id}>
              <rect
                x={cx - 64}
                y={y}
                width={128}
                height={nodeH}
                rx={4}
                fill={isFirst ? "rgba(74,158,255,0.12)" : isLast ? "rgba(167,139,250,0.12)" : "rgba(255,255,255,0.04)"}
                stroke={isFirst ? "rgba(74,158,255,0.3)" : isLast ? "rgba(167,139,250,0.3)" : "rgba(255,255,255,0.08)"}
                strokeWidth={1}
              />
              <text
                x={cx}
                y={y + nodeH / 2 + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={isFirst ? "#4a9eff" : isLast ? "#a78bfa" : "#c0c0c0"}
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                }}
              >
                {node.label}
              </text>
              {/* Pulse dot */}
              <circle
                cx={cx + 70}
                cy={y + nodeH / 2}
                r={3}
                fill={isFirst ? "#4a9eff" : isLast ? "#a78bfa" : "#444"}
                style={{
                  animation: "pulse-dot 2s ease-in-out infinite",
                  animationDelay: `${i * 0.4}s`,
                }}
              />
            </g>
          );
        })}

        {/* Floating badges */}
        {BADGES.map((badge) => (
          <g
            key={badge.label}
            style={{
              animation: "float 3s ease-in-out infinite",
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <rect
              x={cx + badge.x - 20}
              y={badge.y}
              width={40 + badge.label.length * 4}
              height={20}
              rx={10}
              fill="rgba(255,255,255,0.04)"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth={1}
            />
            <text
              x={cx + badge.x + (20 + badge.label.length * 2)}
              y={badge.y + 10}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#666"
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
