import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons";
import { socialLinks } from "../../data/socialLinks";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        borderTop: "1px solid #1a1a1a",
        padding: "40px 24px",
        background: "#0a0a0a",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 12,
              letterSpacing: "0.1em",
              color: "#444",
              margin: 0,
            }}
          >
            PRANAD VAISHNAV â€” {year}
          </p>
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11,
              color: "#333",
              margin: "4px 0 0",
              letterSpacing: "0.05em",
            }}
          >
            Built with React + Vite + Tailwind CSS
          </p>
        </div>

        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#444", transition: "color 0.2s" }}
              aria-label="GitHub"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#888")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
            >
              <GithubIcon size={16} />
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#444", transition: "color 0.2s" }}
              aria-label="LinkedIn"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#888")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
            >
              <LinkedinIcon size={16} />
            </a>
          )}
          {socialLinks.email && (
            <a
              href={`mailto:${socialLinks.email}`}
              style={{ color: "#444", transition: "color 0.2s" }}
              aria-label="Email"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#888")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
            >
              <Mail size={16} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}

