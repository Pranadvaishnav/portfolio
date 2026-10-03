import Hero from "../components/Hero/Hero";
import Snapshot from "../components/Snapshot/Snapshot";
import ProjectGrid from "../components/Work/ProjectGrid";
import TechStack from "../components/TechStack/TechStack";
import ResearchCard from "../components/Research/ResearchCard";
import Timeline from "../components/Timeline/Timeline";
import GitHubRepos from "../components/GitHub/GitHubRepos";
import About from "../components/About/About";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import ResumeCTA from "../components/ResumeCTA/ResumeCTA";
import Contact from "../components/Contact/Contact";
import { research } from "../data/research";

function SectionHeader({ label, title }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <p
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 9,
          letterSpacing: "0.2em",
          color: "#444",
          margin: "0 0 10px",
        }}
      >
        {label}
      </p>
      <h2
        style={{
          margin: 0,
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 700,
          color: "#e0e0e0",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function Section({ children, noBorder, style }) {
  return (
    <section
      style={{
        borderTop: noBorder ? "none" : "1px solid #111",
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
      {/* ── Hero ── */}
      <Hero />

      {/* ── Snapshot ── */}
      <Snapshot />

      {/* ── Selected Work ── */}
      <Section>
        <SectionHeader label="PORTFOLIO" title="Selected Work" />
        <ProjectGrid />
      </Section>

      {/* ── Technical Stack ── */}
      <Section style={{ background: "#080808" }}>
        <SectionHeader label="CAPABILITIES" title="Technical Stack" />
        <TechStack />
      </Section>

      {/* ── Research ── */}
      <Section>
        <SectionHeader label="EXPLORATIONS" title="Research & Experiments" />
        <p
          style={{
            color: "#555",
            fontSize: 13,
            lineHeight: 1.6,
            margin: "0 0 40px",
            maxWidth: 600,
          }}
        >
          Areas of ongoing exploration, research interest, and experimentation.
          Clearly labeled by status — not every interest is a completed project.
        </p>
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

      {/* ── GitHub Repos ── */}
      <Section style={{ background: "#080808" }}>
        <SectionHeader label="FROM THE REPOSITORIES" title="GitHub Projects" />
        <GitHubRepos />
      </Section>

      {/* ── Learning Path ── */}
      <Section>
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
            <SectionHeader label="PROGRESSION" title="Current Learning Path" />
            <p
              style={{
                color: "#555",
                fontSize: 13,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Not a strict chronology — a map of how the different areas connect
              and how each one informed the next. Click each node to expand.
            </p>
          </div>
          <Timeline />
        </div>
        <style>{`
          @media (max-width: 768px) {
            .timeline-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </Section>

      {/* ── About ── */}
      <Section style={{ background: "#080808" }}>
        <About />
      </Section>

      {/* ── Elsewhere on the Web ── */}
      <Section>
        <SectionHeader label="ELSEWHERE" title="Find Me Online" />
        <SocialLinks />
      </Section>

      {/* ── Resume CTA ── */}
      <Section style={{ background: "#080808" }}>
        <ResumeCTA />
      </Section>

      {/* ── Contact ── */}
      <Section id="contact">
        <Contact />
      </Section>
    </main>
  );
}
