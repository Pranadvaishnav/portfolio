import { useState } from "react";
import { techCategories } from "../../data/technologies";
import { projects } from "../../data/projects";

const CAT_LABELS = {
  languages: "Languages",
  aiml: "AI / ML",
  web: "Web Dev",
  databases: "Databases",
  devops: "DevOps",
  tools: "Tools",
};

function getProjectTitle(id) {
  return projects.find((p) => p.id === id)?.shortTitle || id;
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("aiml");
  const [selectedTech, setSelectedTech] = useState(null);

  const currentCat = techCategories.find((c) => c.id === activeCategory);

  return (
    <div>
      {/* Category tabs */}
      <div
        style={{
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          marginBottom: 32,
        }}
      >
        {techCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              setSelectedTech(null);
            }}
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 10,
              letterSpacing: "0.1em",
              padding: "7px 14px",
              border: "1px solid",
              borderColor: activeCategory === cat.id ? "#444" : "#1a1a1a",
              borderRadius: 4,
              background: activeCategory === cat.id ? "#1a1a1a" : "transparent",
              color: activeCategory === cat.id ? "#f0f0f0" : "#555",
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            {CAT_LABELS[cat.id]}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
          alignItems: "flex-start",
        }}
        className="tech-main-grid"
      >
        {/* Tech items */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          {currentCat?.technologies.map((tech) => {
            const isSelected = selectedTech?.id === tech.id;
            const hasProjects = tech.projects.length > 0;
            return (
              <button
                key={tech.id}
                onClick={() =>
                  setSelectedTech(isSelected ? null : tech)
                }
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 11,
                  letterSpacing: "0.06em",
                  padding: "10px 18px",
                  border: "1px solid",
                  borderColor: isSelected ? "#4a9eff" : hasProjects ? "#2a2a2a" : "#1a1a1a",
                  borderRadius: 4,
                  background: isSelected
                    ? "rgba(74,158,255,0.1)"
                    : "rgba(255,255,255,0.02)",
                  color: isSelected ? "#4a9eff" : hasProjects ? "#c0c0c0" : "#444",
                  cursor: "pointer",
                  transition: "all 0.15s",
                  position: "relative",
                }}
              >
                {tech.name}
                {hasProjects && !isSelected && (
                  <span
                    style={{
                      position: "absolute",
                      top: -4,
                      right: -4,
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#4a9eff",
                      border: "1px solid #0a0a0a",
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Project relationship panel */}
        <div
          style={{
            background: "#0d0d0d",
            border: "1px solid #1a1a1a",
            borderRadius: 8,
            padding: "24px",
            minHeight: 200,
          }}
        >
          {!selectedTech ? (
            <div>
              <p
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 9,
                  letterSpacing: "0.12em",
                  color: "#333",
                  margin: "0 0 16px",
                }}
              >
                SELECT A TECHNOLOGY
              </p>
              <p
                style={{
                  color: "#333",
                  fontSize: 13,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Click any technology to see which projects use it.
              </p>
              <p
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 9,
                  letterSpacing: "0.1em",
                  color: "#2a2a2a",
                  margin: "16px 0 0",
                }}
              >
                BLUE DOT = USED IN A PROJECT
              </p>
            </div>
          ) : (
            <div>
              <p
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 9,
                  letterSpacing: "0.12em",
                  color: "#4a9eff",
                  margin: "0 0 12px",
                }}
              >
                {selectedTech.name.toUpperCase()}
              </p>
              {selectedTech.projects.length === 0 ? (
                <p
                  style={{
                    color: "#444",
                    fontSize: 13,
                    fontFamily: "JetBrains Mono, monospace",
                    margin: 0,
                  }}
                >
                  No linked projects yet.
                </p>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <p
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 9,
                      color: "#444",
                      margin: "0 0 8px",
                      letterSpacing: "0.1em",
                    }}
                  >
                    USED IN
                  </p>
                  {selectedTech.projects.map((pid) => (
                    <div
                      key={pid}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <span style={{ color: "#4a9eff", fontSize: 10 }}>├</span>
                      <span
                        style={{
                          fontFamily: "JetBrains Mono, monospace",
                          fontSize: 11,
                          color: "#c0c0c0",
                        }}
                      >
                        {getProjectTitle(pid)}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tech-main-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
