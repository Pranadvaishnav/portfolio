import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon } from "../icons";
import TechFlow from "./TechFlow";
import { socialLinks } from "../../data/socialLinks";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "80px 24px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          mask: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Gradient blob */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(74,158,255,0.04) 0%, transparent 70%)",
          top: "10%",
          right: "20%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left â€” text */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Status chip */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 12px",
              border: "1px solid #222",
              borderRadius: 20,
              marginBottom: 32,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#4ade80",
                display: "inline-block",
                animation: "pulse-dot 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 10,
                letterSpacing: "0.12em",
                color: "#666",
              }}
            >
              CHANDIGARH UNIVERSITY · CS · 2028
            </span>
          </div>

          {/* Pillars chip strip */}
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, letterSpacing: "0.12em", color: "#4a9eff", padding: "3px 10px", background: "rgba(74,158,255,0.08)", border: "1px solid rgba(74,158,255,0.2)", borderRadius: 12 }}>AI / ML</span>
            <span style={{ color: "#444", fontSize: 11 }}>×</span>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, letterSpacing: "0.12em", color: "#c084fc", padding: "3px 10px", background: "rgba(192,132,252,0.08)", border: "1px solid rgba(192,132,252,0.2)", borderRadius: 12 }}>WEB3</span>
            <span style={{ color: "#444", fontSize: 11 }}>×</span>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, letterSpacing: "0.12em", color: "#4ade80", padding: "3px 10px", background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: 12 }}>FULL STACK</span>
          </div>

          {/* Headline */}
          <h1
            style={{
              margin: "0 0 20px",
              lineHeight: 1.05,
              fontWeight: 700,
            }}
          >
            <span
              style={{
                display: "block",
                fontSize: "clamp(38px, 5.5vw, 76px)",
                letterSpacing: "-0.02em",
                color: "#f0f0f0",
              }}
            >
              BUILDING
            </span>
            <span
              style={{
                display: "block",
                fontSize: "clamp(38px, 5.5vw, 76px)",
                letterSpacing: "-0.02em",
                color: "#f0f0f0",
              }}
            >
              INTELLIGENT
            </span>
            <span
              style={{
                display: "block",
                fontSize: "clamp(34px, 4.8vw, 64px)",
                letterSpacing: "-0.02em",
                background: "linear-gradient(135deg, #4a9eff 0%, #c084fc 50%, #4ade80 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              & DECENTRALIZED
            </span>
            <span
              style={{
                display: "block",
                fontSize: "clamp(34px, 4.8vw, 64px)",
                letterSpacing: "-0.02em",
                background: "linear-gradient(135deg, #d4c5a9 0%, #888 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              SYSTEMS.
            </span>
          </h1>

          {/* Subtext */}
          <p
            style={{
              color: "#777",
              fontSize: 15,
              lineHeight: 1.7,
              margin: "0 0 36px",
              maxWidth: 490,
            }}
          >
            Computer Science student building AI/ML systems, Web3 applications,
            and full-stack software while exploring the intersection of intelligent
            and decentralized architectures.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Link
              to="/work"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
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
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#d4c5a9")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#f0f0f0")
              }
            >
              VIEW PROJECTS <ArrowRight size={13} />
            </Link>

            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 24px",
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
                <GithubIcon size={13} />
                GITHUB â†—
              </a>
            )}

            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
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
              <Mail size={13} />
              CONTACT
            </Link>

            {socialLinks.resume && (
              <a
                href={socialLinks.resume}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 24px",
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
                RESUME â†“
              </a>
            )}
          </div>
        </div>

        {/* Right â€” visualization */}
        <div
          className="hero-visual"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 400,
          }}
        >
          <TechFlow />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-visual { display: none !important; }
        }
      `}</style>
    </section>
  );
}

