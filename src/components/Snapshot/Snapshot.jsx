const items = [
  {
    label: "EDUCATION",
    value: "Computer Science",
    sub: "Chandigarh University",
  },
  { label: "GRADUATION", value: "2028", sub: "Expected May" },
  { label: "FOCUS", value: "AI / ML / Full Stack", sub: null },
  { label: "CURRENTLY", value: "Building + Learning", sub: "+ Researching" },
];

export default function Snapshot() {
  return (
    <section
      style={{
        borderTop: "1px solid #1a1a1a",
        borderBottom: "1px solid #1a1a1a",
        background: "#0d0d0d",
        padding: "24px",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1,
        }}
        className="snapshot-grid"
      >
        {items.map((item, i) => (
          <div
            key={item.label}
            style={{
              padding: "20px 24px",
              borderRight: i < items.length - 1 ? "1px solid #1a1a1a" : "none",
            }}
            className="snapshot-item"
          >
            <p
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 9,
                letterSpacing: "0.15em",
                color: "#444",
                margin: "0 0 8px",
              }}
            >
              {item.label}
            </p>
            <p
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 13,
                fontWeight: 600,
                color: "#c0c0c0",
                margin: "0 0 2px",
                letterSpacing: "0.02em",
              }}
            >
              {item.value}
            </p>
            {item.sub && (
              <p
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 10,
                  color: "#555",
                  margin: 0,
                }}
              >
                {item.sub}
              </p>
            )}
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .snapshot-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .snapshot-item { border-right: none !important; border-bottom: 1px solid #1a1a1a; }
        }
        @media (max-width: 480px) {
          .snapshot-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
