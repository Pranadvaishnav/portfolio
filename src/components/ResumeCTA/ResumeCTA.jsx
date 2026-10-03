import { Download, Eye } from "lucide-react";
import { socialLinks } from "../../data/socialLinks";

export default function ResumeCTA() {
  return (
    <section
      style={{
        border: "1px solid #1a1a1a",
        borderRadius: 12,
        padding: "48px",
        background: "#0d0d0d",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 9,
          letterSpacing: "0.2em",
          color: "#444",
          margin: "0 0 16px",
        }}
      >
        WANT THE FULL PICTURE?
      </p>
      <h2
        style={{
          margin: "0 0 16px",
          fontSize: "clamp(20px, 3vw, 32px)",
          fontWeight: 700,
          color: "#e0e0e0",
          letterSpacing: "-0.01em",
        }}
      >
        Resume Available
      </h2>
      <p
        style={{
          color: "#666",
          fontSize: 14,
          lineHeight: 1.7,
          margin: "0 auto 32px",
          maxWidth: 480,
        }}
      >
        Explore the portfolio here, or download the complete resume for a concise
        overview of my education, technical skills, projects, and experience.
      </p>
      <div
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <a
          href={socialLinks.resume}
          download
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 28px",
            background: "#f0f0f0",
            color: "#0a0a0a",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.1em",
            borderRadius: 4,
            textDecoration: "none",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#d4c5a9")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#f0f0f0")}
        >
          <Download size={13} />
          DOWNLOAD RESUME
        </a>
        <a
          href={socialLinks.resume}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 28px",
            border: "1px solid #2a2a2a",
            color: "#888",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 11,
            letterSpacing: "0.1em",
            borderRadius: 4,
            textDecoration: "none",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#f0f0f0";
            e.currentTarget.style.borderColor = "#444";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#888";
            e.currentTarget.style.borderColor = "#2a2a2a";
          }}
        >
          <Eye size={13} />
          VIEW RESUME
        </a>
      </div>
    </section>
  );
}
