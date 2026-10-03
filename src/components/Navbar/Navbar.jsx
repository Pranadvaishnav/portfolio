import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { GithubIcon } from "../icons";
import { socialLinks } from "../../data/socialLinks";

const navLinks = [
  { label: "WORK", href: "/work" },
  { label: "STACK", href: "/stack" },
  { label: "RESEARCH", href: "/research" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s, border-color 0.3s",
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid #1a1a1a" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontWeight: 600,
            fontSize: 15,
            letterSpacing: "0.1em",
            color: "#f0f0f0",
            textDecoration: "none",
          }}
        >
          PRANAD
        </Link>

        {/* Desktop nav */}
        <div
          className="desktop-nav"
          style={{ display: "flex", alignItems: "center", gap: 32 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 11,
                letterSpacing: "0.12em",
                color:
                  location.pathname === link.href ? "#f0f0f0" : "#666",
                textDecoration: "none",
                transition: "color 0.2s",
                fontWeight: location.pathname === link.href ? 600 : 400,
              }}
              onMouseEnter={(e) => (e.target.style.color = "#f0f0f0")}
              onMouseLeave={(e) => {
                if (location.pathname !== link.href)
                  e.target.style.color = "#666";
              }}
            >
              {link.label}
            </Link>
          ))}

          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 11,
                letterSpacing: "0.1em",
                color: "#888",
                textDecoration: "none",
                padding: "6px 12px",
                border: "1px solid #2a2a2a",
                borderRadius: 4,
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
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            background: "none",
            border: "none",
            color: "#f0f0f0",
            cursor: "pointer",
            padding: 4,
            display: "none",
          }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            background: "#111",
            borderBottom: "1px solid #222",
            padding: "16px 24px 24px",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              style={{
                display: "block",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 12,
                letterSpacing: "0.12em",
                color:
                  location.pathname === link.href ? "#f0f0f0" : "#888",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid #1a1a1a",
              }}
            >
              {link.label}
            </Link>
          ))}
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginTop: 16,
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 12,
                letterSpacing: "0.1em",
                color: "#888",
                textDecoration: "none",
              }}
            >
              <GithubIcon size={14} />
              GITHUB â†—
            </a>
          )}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}

