import { useState } from "react";
import { projects, getProjectsByCategory } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import ProjectDetail from "../ProjectDetail/ProjectDetail";

const FILTERS = [
  { id: "ALL", label: "ALL" },
  { id: "ML", label: "AI / ML" },
  { id: "LLM", label: "LLM / NLP" },
  { id: "FULLSTACK", label: "FULL STACK" },
  { id: "DATA", label: "DATA / GRAPH" },
  { id: "SCIENCE", label: "SCIENTIFIC" },
];

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = getProjectsByCategory(activeFilter);

  return (
    <div>
      {/* Filter tabs */}
      <div
        style={{
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          marginBottom: 40,
        }}
      >
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 10,
              letterSpacing: "0.12em",
              padding: "8px 16px",
              border: "1px solid",
              borderColor: activeFilter === f.id ? "#444" : "#1a1a1a",
              borderRadius: 4,
              background: activeFilter === f.id ? "#1a1a1a" : "transparent",
              color: activeFilter === f.id ? "#f0f0f0" : "#555",
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid — varied layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: 16,
        }}
        className="project-grid"
      >
        {filtered.map((project, i) => {
          // Featured projects get wide columns
          const isFeatured = project.featured;
          const span =
            isFeatured
              ? i % 3 === 0
                ? "span 8"
                : "span 4"
              : "span 4";

          return (
            <div
              key={project.id}
              style={{ gridColumn: span }}
              className="project-col"
            >
              <ProjectCard
                project={project}
                onOpen={setSelectedProject}
                featured={isFeatured && i % 3 === 0}
              />
            </div>
          );
        })}
      </div>

      {/* Project detail modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <style>{`
        @media (max-width: 1024px) {
          .project-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .project-col { grid-column: span 1 !important; }
        }
        @media (max-width: 600px) {
          .project-grid { grid-template-columns: 1fr !important; }
          .project-col { grid-column: span 1 !important; }
        }
      `}</style>
    </div>
  );
}
