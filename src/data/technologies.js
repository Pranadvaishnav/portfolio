// ─────────────────────────────────────────────────────────────────
// Technologies Data
// projects: array of project IDs that use this technology
// ─────────────────────────────────────────────────────────────────

export const techCategories = [
  {
    id: "languages",
    label: "Languages",
    technologies: [
      { id: "python", name: "Python", projects: ["business-entity-resolution", "llm-from-scratch", "vae-anomaly-detection", "facechain-verification", "graph-fraud-investigation", "seismic-data-processing"] },
      { id: "solidity", name: "Solidity", projects: ["perigee-protocol", "facechain-verification"] },
      { id: "typescript", name: "TypeScript", projects: ["perigee-protocol"] },
      { id: "javascript", name: "JavaScript", projects: ["sleep-tracker", "event-management"] },
      { id: "java", name: "Java", projects: ["devops-pipeline"] },
      { id: "cpp", name: "C++", projects: [] },
      { id: "sql", name: "SQL", projects: ["sleep-tracker"] }
    ]
  },
  {
    id: "aiml",
    label: "AI / ML",
    technologies: [
      { id: "pytorch", name: "PyTorch", projects: ["llm-from-scratch", "vae-anomaly-detection"] },
      { id: "face-recognition", name: "face_recognition", projects: ["facechain-verification"] },
      { id: "transformers", name: "Transformers", projects: ["llm-from-scratch"] },
      { id: "huggingface", name: "HuggingFace", projects: ["llm-from-scratch"] },
      { id: "tiktoken", name: "tiktoken", projects: ["llm-from-scratch"] },
      { id: "lightgbm", name: "LightGBM", projects: ["business-entity-resolution"] },
      { id: "rapidfuzz", name: "RapidFuzz", projects: ["business-entity-resolution"] },
      { id: "numpy", name: "NumPy", projects: ["vae-anomaly-detection", "facechain-verification", "seismic-data-processing"] },
      { id: "pandas", name: "Pandas", projects: ["business-entity-resolution", "vae-anomaly-detection"] },
      { id: "matplotlib", name: "Matplotlib", projects: ["seismic-data-processing"] },
      { id: "tensorflow", name: "TensorFlow", projects: [] },
      { id: "keras", name: "Keras", projects: [] }
    ]
  },
  {
    id: "web3",
    label: "Web3 / DeFi",
    technologies: [
      { id: "solidity-tech", name: "Solidity 0.8.24", projects: ["perigee-protocol", "facechain-verification"] },
      { id: "foundry", name: "Foundry", projects: ["perigee-protocol"] },
      { id: "hardhat", name: "Hardhat", projects: ["facechain-verification"] },
      { id: "viem", name: "Viem", projects: ["perigee-protocol"] },
      { id: "web3py", name: "Web3.py", projects: ["facechain-verification"] },
      { id: "polygon", name: "Polygon Amoy", projects: ["facechain-verification"] }
    ]
  },
  {
    id: "web",
    label: "Web Dev",
    technologies: [
      { id: "nextjs", name: "Next.js 14", projects: ["perigee-protocol"] },
      { id: "react", name: "React", projects: ["sleep-tracker", "perigee-protocol"] },
      { id: "tailwind", name: "Tailwind CSS", projects: ["sleep-tracker", "perigee-protocol"] },
      { id: "nodejs", name: "Node.js", projects: ["sleep-tracker", "event-management"] },
      { id: "express", name: "Express.js", projects: ["sleep-tracker", "event-management"] },
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
    label: "DevOps & Cloud",
    technologies: [
      { id: "docker", name: "Docker", projects: ["devops-pipeline"] },
      { id: "jenkins", name: "Jenkins", projects: ["devops-pipeline"] },
      { id: "aws-ec2", name: "AWS EC2", projects: ["devops-pipeline"] },
      { id: "git", name: "Git", projects: ["devops-pipeline", "perigee-protocol"] },
      { id: "github", name: "GitHub", projects: ["devops-pipeline", "perigee-protocol"] },
      { id: "maven", name: "Maven", projects: ["devops-pipeline"] },
      { id: "linux", name: "Linux / Ubuntu", projects: ["devops-pipeline"] },
      { id: "wsl", name: "WSL", projects: [] }
    ]
  },
  {
    id: "tools",
    label: "Tools",
    technologies: [
      { id: "vscode", name: "VS Code", projects: [] },
      { id: "intellij", name: "IntelliJ", projects: ["devops-pipeline"] }
    ]
  }
];

export const getAllTechnologies = () =>
  techCategories.flatMap(cat => cat.technologies);

export const getTechById = (id) =>
  getAllTechnologies().find(t => t.id === id);
