// ─────────────────────────────────────────────────────────────────
// Research & Experiments Data
// Status options: "research" | "experiment" | "exploration" | "interest"
// Do NOT mark anything as "publication" or "completed paper"
// unless an actual publication exists.
// ─────────────────────────────────────────────────────────────────

export const research = [
  {
    id: "ehep-ml",
    title: "Advanced Multivariate Techniques in EHEP",
    status: "research",
    statusLabel: "RESEARCH",
    area: "Physics ML",
    description:
      "Exploring the application of machine learning and deep learning techniques — including deep neural networks and Variational Autoencoders — to high-energy experimental physics (EHEP). The focus is on multivariate analysis of CMS collider data, where traditional cut-based methods leave signal efficiency on the table.",
    concepts: [
      "Machine Learning",
      "Deep Neural Networks",
      "Variational Autoencoders",
      "Collider Physics",
      "CMS Data Analysis",
      "Signal vs. Background Classification"
    ],
    note: "Research exploration — not a completed publication.",
    github: "https://github.com/Pranadvaishnav/Multivariate-techniques"
  },

  {
    id: "particle-transformer",
    title: "Particle Transformer & Jet Tagging",
    status: "exploration",
    statusLabel: "EXPLORATION",
    area: "Physics ML",
    description:
      "Exploring transformer architectures applied to particle physics — specifically jet tagging: classifying hadronic jets by their originating particle (quark, gluon, top, Higgs). The Particle Transformer architecture adapts attention mechanisms to point-cloud-like particle datasets. Exploration includes JetNet benchmark datasets and signal vs. background classification.",
    concepts: [
      "Particle Transformer",
      "Jet Tagging",
      "Signal vs. Background Classification",
      "JetNet",
      "Transformers",
      "Point Cloud ML",
      "Collider Physics"
    ],
    note: "Ongoing exploration of the literature and architecture."
  },

  {
    id: "hyperspectral",
    title: "Hyperspectral Image Classification",
    status: "exploration",
    statusLabel: "EXPLORATION",
    area: "Computer Vision / ML",
    description:
      "Exploring deep learning approaches to hyperspectral image classification — images with hundreds of spectral bands rather than the standard 3 (RGB). Techniques explored include 1D and 2D CNNs operating on spectral-spatial features, with applications to remote sensing and material identification.",
    concepts: [
      "Hyperspectral Imaging",
      "Spectral-Spatial Classification",
      "CNNs",
      "Remote Sensing",
      "Deep Learning",
      "Computer Vision"
    ],
    note: "Early-stage ML exploration."
  },

  {
    id: "scientific-ml",
    title: "Scientific / Physics ML",
    status: "interest",
    statusLabel: "INTEREST",
    area: "Scientific Computing",
    description:
      "A broader interest in applying machine learning to scientific datasets beyond conventional business problems — including physics simulations, geophysical data, and other domains where data is structured by physical laws rather than user behavior. Motivated by the intersection of mathematical structure and empirical learning.",
    concepts: [
      "Physics-Informed ML",
      "Scientific Computing",
      "Simulation Data",
      "Domain-Specific ML",
      "Research Applications"
    ],
    note: "Active interest — not a specific project."
  }
];
