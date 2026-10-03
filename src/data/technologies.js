// ─────────────────────────────────────────────────────────────────
// Technologies Data
// projects: array of project IDs that use this technology
// ─────────────────────────────────────────────────────────────────

export const techCategories = [
  {
    id: "languages",
    label: "Languages",
    technologies: [
      { id: "python", name: "Python", projects: ["business-entity-resolution", "llm-from-scratch", "vae-anomaly-detection", "graph-fraud-investigation", "seismic-data-processing"] },
      { id: "cpp", name: "C++", projects: [] },
      { id: "java", name: "Java", projects: [] },
      { id: "javascript", name: "JavaScript", projects: ["sleep-tracker", "event-management"] },
      { id: "sql", name: "SQL", projects: ["sleep-tracker"] },
      { id: "html", name: "HTML", projects: ["event-management"] },
      { id: "css", name: "CSS", projects: ["event-management"] }
    ]
  },
  {
    id: "aiml",
    label: "AI / ML",
    technologies: [
      { id: "pytorch", name: "PyTorch", projects: ["llm-from-scratch", "vae-anomaly-detection"] },
      { id: "tensorflow", name: "TensorFlow", projects: [] },
      { id: "keras", name: "Keras", projects: [] },
      { id: "transformers", name: "Transformers", projects: ["llm-from-scratch"] },
      { id: "huggingface", name: "HuggingFace", projects: ["llm-from-scratch"] },
      { id: "tiktoken", name: "tiktoken", projects: ["llm-from-scratch"] },
      { id: "lightgbm", name: "LightGBM", projects: ["business-entity-resolution"] },
      { id: "rapidfuzz", name: "RapidFuzz", projects: ["business-entity-resolution"] },
      { id: "numpy", name: "NumPy", projects: ["vae-anomaly-detection", "seismic-data-processing"] },
      { id: "pandas", name: "Pandas", projects: ["business-entity-resolution", "vae-anomaly-detection"] },
      { id: "matplotlib", name: "Matplotlib", projects: ["seismic-data-processing"] }
    ]
  },
  {
    id: "web",
    label: "Web Dev",
    technologies: [
      { id: "react", name: "React", projects: ["sleep-tracker"] },
      { id: "nodejs", name: "Node.js", projects: ["sleep-tracker", "event-management"] },
      { id: "express", name: "Express.js", projects: ["sleep-tracker", "event-management"] },
      { id: "tailwind", name: "Tailwind CSS", projects: ["sleep-tracker"] },
      { id: "vite", name: "Vite", projects: ["sleep-tracker"] },
      { id: "recharts", name: "Recharts", projects: ["sleep-tracker"] }
    ]
  },
  {
    id: "databases",
    label: "Databases",
    technologies: [
      { id: "postgresql", name: "PostgreSQL", projects: ["sleep-tracker"] },
      { id: "prisma", name: "Prisma", projects: ["sleep-tracker"] },
      { id: "neon", name: "Neon", projects: ["sleep-tracker"] },
      { id: "tigergraph", name: "TigerGraph", projects: ["graph-fraud-investigation"] },
      { id: "gsql", name: "GSQL", projects: ["graph-fraud-investigation"] }
    ]
  },
  {
    id: "devops",
    label: "DevOps",
    technologies: [
      { id: "docker", name: "Docker", projects: [] },
      { id: "jenkins", name: "Jenkins", projects: [] },
      { id: "git", name: "Git", projects: [] },
      { id: "github", name: "GitHub", projects: [] },
      { id: "aws-ec2", name: "AWS EC2", projects: [] },
      { id: "aws-s3", name: "AWS S3", projects: [] },
      { id: "linux", name: "Linux", projects: [] },
      { id: "wsl", name: "WSL", projects: [] }
    ]
  },
  {
    id: "tools",
    label: "Tools",
    technologies: [
      { id: "vscode", name: "VS Code", projects: [] },
      { id: "intellij", name: "IntelliJ", projects: [] },
      { id: "maven", name: "Maven", projects: [] }
    ]
  }
];

export const getAllTechnologies = () =>
  techCategories.flatMap(cat => cat.technologies);

export const getTechById = (id) =>
  getAllTechnologies().find(t => t.id === id);
