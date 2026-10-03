import { useState } from "react";
import { Send, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons";
import { socialLinks, formspreeId } from "../../data/socialLinks";

const FORMSPREE_URL = formspreeId
  ? `https://formspree.io/f/${formspreeId}`
  : null;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setErrors({});

    if (FORMSPREE_URL) {
      // ── Real send via Formspree ──────────────────────────────
      setStatus("sending");
      try {
        const res = await fetch(FORMSPREE_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
          }),
        });
        if (res.ok) {
          setStatus("success");
          setForm({ name: "", email: "", message: "" });
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    } else {
      // ── Fallback: open mailto ────────────────────────────────
      const subject = encodeURIComponent(`Portfolio Contact — ${form.name}`);
      const body = encodeURIComponent(
        `From: ${form.name} <${form.email}>\n\n${form.message}`
      );
      const to = socialLinks.email || "";
      window.open(`mailto:${to}?subject=${subject}&body=${body}`, "_blank");
      setStatus("success");
    }
  }

  const inputStyle = (field) => ({
    width: "100%",
    padding: "12px 16px",
    background: "#0d0d0d",
    border: `1px solid ${errors[field] ? "#f87171" : "#222"}`,
    borderRadius: 4,
    color: "#f0f0f0",
    fontSize: 13,
    fontFamily: "Inter, sans-serif",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 60,
        alignItems: "flex-start",
      }}
      className="contact-grid"
    >
      {/* ── Left — copy ── */}
      <div>
        <p
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 9,
            letterSpacing: "0.2em",
            color: "#444",
            margin: "0 0 12px",
          }}
        >
          LET'S BUILD
        </p>
        <h2
          style={{
            margin: "0 0 16px",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700,
            color: "#e0e0e0",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          Have an interesting problem?
        </h2>
        <p
          style={{
            color: "#666",
            fontSize: 14,
            lineHeight: 1.7,
            margin: "0 0 40px",
          }}
        >
          Have an interesting problem, research idea, project, or collaboration
          in mind? I'm always open to conversations about AI/ML, software
          engineering, and building things.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {socialLinks.email && (
            <a
              href={`mailto:${socialLinks.email}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                color: "#888",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0f0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
            >
              <Mail size={16} />
              <span
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 11,
                }}
              >
                {socialLinks.email}
              </span>
            </a>
          )}
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                color: "#888",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0f0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
            >
              <GithubIcon size={16} />
              <span
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 11,
                }}
              >
                GitHub ↗
              </span>
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                color: "#888",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0f0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
            >
              <LinkedinIcon size={16} />
              <span
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 11,
                }}
              >
                LinkedIn ↗
              </span>
            </a>
          )}
        </div>
      </div>

      {/* ── Right — form ── */}
      <div>
        {status === "success" ? (
          <div
            style={{
              border: "1px solid rgba(74,222,128,0.25)",
              borderRadius: 8,
              padding: "40px 32px",
              background: "rgba(74,222,128,0.05)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: 32,
                marginBottom: 16,
              }}
            >
              ✓
            </div>
            <p
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 13,
                color: "#4ade80",
                letterSpacing: "0.08em",
                margin: "0 0 8px",
                fontWeight: 600,
              }}
            >
              MESSAGE SENT
            </p>
            <p
              style={{
                color: "#666",
                fontSize: 13,
                margin: "0 0 24px",
                lineHeight: 1.6,
              }}
            >
              {FORMSPREE_URL
                ? "Your message was sent successfully. I'll get back to you soon."
                : "Your email client opened with a pre-filled message. Hit send from there!"}
            </p>
            <button
              onClick={() => setStatus("idle")}
              style={{
                background: "none",
                border: "1px solid #222",
                borderRadius: 4,
                padding: "8px 20px",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 10,
                letterSpacing: "0.1em",
                color: "#666",
                cursor: "pointer",
              }}
            >
              SEND ANOTHER
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

              {/* Name */}
              <div>
                <label
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 9,
                    letterSpacing: "0.14em",
                    color: "#555",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  NAME
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  onFocus={(e) =>
                    (e.target.style.borderColor = errors.name
                      ? "#f87171"
                      : "#444")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = errors.name
                      ? "#f87171"
                      : "#222")
                  }
                  style={inputStyle("name")}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  disabled={status === "sending"}
                />
                {errors.name && (
                  <p
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 9,
                      color: "#f87171",
                      margin: "6px 0 0",
                    }}
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 9,
                    letterSpacing: "0.14em",
                    color: "#555",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  onFocus={(e) =>
                    (e.target.style.borderColor = errors.email
                      ? "#f87171"
                      : "#444")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = errors.email
                      ? "#f87171"
                      : "#222")
                  }
                  style={inputStyle("email")}
                  placeholder="your@email.com"
                  aria-invalid={!!errors.email}
                  disabled={status === "sending"}
                />
                {errors.email && (
                  <p
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 9,
                      color: "#f87171",
                      margin: "6px 0 0",
                    }}
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 9,
                    letterSpacing: "0.14em",
                    color: "#555",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  MESSAGE
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  onFocus={(e) =>
                    (e.target.style.borderColor = errors.message
                      ? "#f87171"
                      : "#444")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = errors.message
                      ? "#f87171"
                      : "#222")
                  }
                  style={{
                    ...inputStyle("message"),
                    minHeight: 140,
                    resize: "vertical",
                  }}
                  placeholder="Tell me about the project, idea, or question..."
                  aria-invalid={!!errors.message}
                  disabled={status === "sending"}
                />
                {errors.message && (
                  <p
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 9,
                      color: "#f87171",
                      margin: "6px 0 0",
                    }}
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "14px 28px",
                  background: status === "sending" ? "#222" : "#f0f0f0",
                  color: status === "sending" ? "#666" : "#0a0a0a",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  border: "none",
                  borderRadius: 4,
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  transition: "background 0.2s",
                  width: "100%",
                }}
                onMouseEnter={(e) => {
                  if (status !== "sending")
                    e.currentTarget.style.background = "#d4c5a9";
                }}
                onMouseLeave={(e) => {
                  if (status !== "sending")
                    e.currentTarget.style.background = "#f0f0f0";
                }}
              >
                {status === "sending" ? (
                  "SENDING..."
                ) : (
                  <>
                    SEND <Send size={12} />
                  </>
                )}
              </button>

              {status === "error" && (
                <p
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 10,
                    color: "#f87171",
                    textAlign: "center",
                    margin: 0,
                  }}
                >
                  Something went wrong. Try emailing directly at{" "}
                  {socialLinks.email || "the address in the sidebar"}.
                </p>
              )}

              {/* Status note */}
              <p
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 9,
                  color: "#2a2a2a",
                  textAlign: "center",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {FORMSPREE_URL
                  ? "Messages sent directly — no email client needed."
                  : "Set formspreeId in socialLinks.js to enable direct sending."}
              </p>
            </div>
          </form>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
