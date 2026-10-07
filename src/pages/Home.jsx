import Hero from "../components/Hero/Hero";
import Snapshot from "../components/Snapshot/Snapshot";
import ProjectGrid from "../components/Work/ProjectGrid";
import Pillars from "../components/Pillars/Pillars";
import ResearchCard from "../components/Research/ResearchCard";
import GitHubRepos from "../components/GitHub/GitHubRepos";
import About from "../components/About/About";
import Timeline from "../components/Timeline/Timeline";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import ResumeCTA from "../components/ResumeCTA/ResumeCTA";
import Contact from "../components/Contact/Contact";
import { research } from "../data/research";

function SectionHeader({ label, title, subtitle }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <p
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 9,
          letterSpacing: "0.2em",
          color: "#555",
          margin: "0 0 10px",
        }}
      >
        {label}
      </p>
      <h2
        style={{
          margin: "0 0 8px",
          fontSize: "clamp(26px, 3.8vw, 44px)",
          fontWeight: 700,
          color: "#e0e0e0",
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            color: "#666",
            fontSize: 13.5,
            lineHeight: 1.6,
            margin: 0,
            maxWidth: 600,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Section({ children, noBorder, style, id }) {
  return (
    <section
      id={id}
      style={{
        borderTop: noBorder ? "none" : "1px solid #141414",
        padding: "80px 24px",
        ...style,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      {/* ── 1. Hero ── */}
      <Hero />

      {/* ── 2. Snapshot Strip ── */}
      <Snapshot />

      {/* ── 3. Selected Work / Projects ── */}
      <Section id="work">
        <SectionHeader
          label="PORTFOLIO"
          title="Selected Work"
          subtitle="Production-quality systems, protocols, and architectures built with technical depth and first-principles understanding."
        />
        <ProjectGrid />
      </Section>

      {/* ── 4. AI / ML • WEB3 • FULL STACK Technical Section ── */}
      <Pillars />

      {/* ── 5. Research & Experiments ── */}
      <Section id="research" style={{ background: "#090909" }}>
        <SectionHeader
          label="EXPLORATIONS"
          title="Research & Experiments"
          subtitle="Areas of ongoing inquiry and scientific computing. Clearly labeled by honest status — not every interest is a completed paper."
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 16,
          }}
        >
          {research.map((item) => (
            <ResearchCard key={item.id} item={item} />
          ))}
        </div>
      </Section>

      {/* ── 6. GitHub Projects & Activity ── */}
      <Section id="github">
        <SectionHeader
          label="FROM THE REPOSITORIES"
          title="GitHub Projects"
          subtitle="Live repositories fetched directly via GitHub REST API, highlighting active code and experiments."
        />
        <GitHubRepos />
      </Section>

      {/* ── 7. About & Education / Progression ── */}
      <Section id="about" style={{ background: "#090909" }}>
        <About />
        <div style={{ marginTop: 60, borderTop: "1px solid #161616", paddingTop: 60 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
              alignItems: "flex-start",
            }}
            className="timeline-grid"
          >
            <div>
              <SectionHeader
                label="PROGRESSION"
                title="Current Technical Journey"
                subtitle="A map of how foundational systems, full-stack engineering, machine learning, and Web3 smart contracts interconnect."
              />
              <p
                style={{
                  color: "#555",
                  fontSize: 13,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Click each milestone to expand its architectural focus and tools.
              </p>
            </div>
            <Timeline />
          </div>
          <style>{`
            @media (max-width: 768px) {
              .timeline-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </Section>

      {/* ── 8. Resume CTA ── */}
      <Section>
        <ResumeCTA />
      </Section>

      {/* ── 9. Elsewhere ── */}
      <Section style={{ background: "#090909" }}>
        <SectionHeader label="ELSEWHERE" title="Find Me Online" />
        <SocialLinks />
      </Section>

      {/* ── 10. Contact ── */}
      <Section id="contact">
        <Contact />
      </Section>
    </main>
  );
}
