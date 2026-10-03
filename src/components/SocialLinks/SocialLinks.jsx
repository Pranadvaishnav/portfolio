import { Code2, BarChart3, Mail, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons";
import { socialLinks } from "../../data/socialLinks";

const PLATFORMS = [
  {
    key: "github",
    label: "GitHub",
    sub: "Code & Projects",
    icon: GithubIcon,
    color: "#f0f0f0",
    bg: "rgba(240,240,240,0.04)",
    border: "rgba(240,240,240,0.08)",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    sub: "Professional Profile",
    icon: LinkedinIcon,
    color: "#4a9eff",
    bg: "rgba(74,158,255,0.05)",
    border: "rgba(74,158,255,0.12)",
  },
  {
    key: "leetcode",
    label: "LeetCode",
    sub: "DSA Practice",
    icon: Code2,
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.05)",
    border: "rgba(251,191,36,0.12)",
  },
  {
    key: "kaggle",
    label: "Kaggle",
    sub: "ML Competitions",
    icon: BarChart3,
    color: "#4ade80",
    bg: "rgba(74,222,128,0.05)",
    border: "rgba(74,222,128,0.12)",
  },
  {
    key: "email",
    label: "Email",
    sub: "Reach out directly",
    icon: Mail,
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.05)",
    border: "rgba(167,139,250,0.12)",
    isEmail: true,
  },
];

export default function SocialLinks() {
  const visible = PLATFORMS.filter((p) => socialLinks[p.key]);

  if (visible.length === 0) return null;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: 12,
      }}
    >
      {visible.map((platform) => {
        const Icon = platform.icon;
        const href = platform.isEmail
          ? `mailto:${socialLinks[platform.key]}`
          : socialLinks[platform.key];

        return (
          <a
            key={platform.key}
            href={href}
            target={platform.isEmail ? undefined : "_blank"}
            rel={platform.isEmail ? undefined : "noopener noreferrer"}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "18px 20px",
              border: `1px solid ${platform.border}`,
              borderRadius: 8,
              background: platform.bg,
              textDecoration: "none",
              transition: "all 0.2s",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <Icon size={20} style={{ color: platform.color, flexShrink: 0 }} />
            <div>
              <p
                style={{
                  margin: 0,
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#c0c0c0",
                  letterSpacing: "0.04em",
                }}
              >
                {platform.label}
              </p>
              <p
                style={{
                  margin: 0,
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 9,
                  color: "#555",
                  letterSpacing: "0.08em",
                  marginTop: 2,
                }}
              >
                {platform.sub}
              </p>
            </div>
            <ExternalLink
              size={12}
              style={{
                position: "absolute",
                right: 14,
                top: 14,
                color: "#333",
              }}
            />
          </a>
        );
      })}
    </div>
  );
}

