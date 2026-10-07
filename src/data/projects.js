// ─────────────────────────────────────────────────────────────────
// Projects Data
// All information sourced from actual project work.
// Do not add fabricated statistics, accuracy numbers, or links.
// Use "" for unknown URLs — the UI will hide buttons gracefully.
// ─────────────────────────────────────────────────────────────────

export const projects = [
  {
    id: "perigee-protocol",
    title: "Perigee Protocol — Perpetual DEX",
    shortTitle: "Perigee Protocol",
    category: "WEB3",
    categoryLabel: "Web3 / DeFi",
    featured: true,
    status: "completed",
    tagline: "High-performance decentralized perpetual futures protocol with 20x leverage.",
    description:
      "A decentralized perpetual futures protocol built with Solidity 0.8.24, Foundry, and a Next.js 14 high-density trading terminal. Traders execute leveraged Long and Short perpetual positions on ETH/USD and BTC/USD with up to 20x leverage, peer-to-pool liquidity, guaranteed execution, automated liquidation keepers, and dynamic funding rate mechanisms.",
    problem:
      "Centralized trading platforms expose users to custodial risk and counterparty failure, while decentralized perpetuals often suffer from poor capital efficiency, oracle front-running, or opaque liquidation mechanics.",
    approach:
      "Architected a modular smart contract suite adhering strictly to the Checks-Effects-Interactions (CEI) security model. Implemented Vault.sol for LP collateral and solvency guards, PositionManager for margin and PnL, LiquidationEngine for underwater margin calls, and OracleManager with price staleness checks. Built a 58-test Foundry test suite (100% pass rate) with invariant and property-based fuzzing.",
    pipeline: [
      { id: "vault", label: "VAULT COLLATERAL", description: "Shared liquidity pool (MockUSDC) with PLP share accounting & solvency guard" },
      { id: "oracle", label: "ORACLE MANAGER", description: "Chainlink-compatible price feeds with staleness & zero-price checks" },
      { id: "position", label: "POSITION MANAGER", description: "Margin accounting, 1x-20x leverage slider, and Long/Short entry" },
      { id: "funding", label: "FUNDING ENGINE", description: "Dynamic skew-based funding rate tracking & index accumulation" },
      { id: "liquidation", label: "LIQUIDATION KEEPER", description: "Public keeper engine liquidating positions below 0.5% margin ratio" },
      { id: "terminal", label: "PRO TRADING UI", description: "Next.js 14 terminal with candlestick charts, Viem execution & oracle simulator" }
    ],
    technologies: ["Solidity", "Foundry", "Next.js", "TypeScript", "Tailwind CSS", "Viem", "DeFi", "Smart Contracts"],
    highlights: [
      "58 automated Foundry tests across 6 test suites (100% pass rate)",
      "Property-based fuzzing on position lifecycles & margin boundaries",
      "Peer-to-pool liquidity model with reserved liquidity solvency guards",
      "Dynamic skew-based funding rate tracking with index accumulation",
      "Next.js 14 pro trading terminal with interactive candlestick charts",
      "Local Anvil deployment with mock oracle controller & testnet faucet"
    ],
    learnings: [
      "Checks-Effects-Interactions (CEI) and reentrancy guards are non-negotiable in financial contracts",
      "Accounting for cumulative funding rates via index accumulation avoids costly loops",
      "Solvency guarantees require locking reserve liquidity at the time of position opening"
    ],
    github: "https://github.com/Pranadvaishnav/Perigee",
    demo: "",
    image: null
  },

  {
    id: "facechain-verification",
    title: "FaceChain — Face ID & Blockchain Verification",
    shortTitle: "FaceChain",
    category: "ML",
    categoryLabel: "AI / Blockchain",
    featured: true,
    status: "completed",
    tagline: "Facial recognition combined with cryptographic image integrity on Polygon Amoy.",
    description:
      "A multimodal identity verification pipeline combining deep facial embeddings with on-chain cryptographic proofs. The system identifies faces in input images, executes reverse image search via Google Lens, computes cryptographic SHA-256 fingerprints, and registers/verifies them on the Polygon Amoy blockchain to detect file tampering.",
    problem:
      "Digital images and profile photos can be effortlessly manipulated or altered. Proving whether an image file has remained pristine since its registration requires an immutable, decentralized audit trail.",
    approach:
      "Built an end-to-end Python pipeline using face_recognition deep embeddings for detection and similarity matching, SerpApi for reverse candidate image retrieval, SHA-256 hashing for tamper detection, and Solidity/Hardhat contracts (FaceRegistry.sol) on Polygon Amoy testnet for decentralized timestamping and proof of integrity.",
    pipeline: [
      { id: "input", label: "INPUT IMAGE", description: "User photograph or identity document image" },
      { id: "embed", label: "FACE EMBEDDINGS", description: "Face detection & 128-d deep facial embeddings via face_recognition" },
      { id: "search", label: "REVERSE SEARCH", description: "Google Lens candidate image retrieval via SerpApi" },
      { id: "match", label: "SIMILARITY MATCHER", description: "Vector distance matching against candidate images" },
      { id: "hash", label: "SHA-256 FINGERPRINT", description: "Cryptographic 256-bit hash representing exact file content" },
      { id: "chain", label: "POLYGON REGISTRY", description: "Smart contract on Polygon Amoy storing hash, timestamp & wallet address" },
      { id: "verify", label: "TAMPER VERIFICATION", description: "Real-time hash comparison flagging VERIFIED vs TAMPERED status" }
    ],
    technologies: ["Python", "face_recognition", "NumPy", "Solidity", "Hardhat", "Web3.py", "Polygon", "SHA-256"],
    highlights: [
      "Deep facial embeddings for high-confidence identity candidate matching",
      "Automated reverse image search via Google Lens engine",
      "Smart contract deployed on Polygon Amoy Testnet (Chain ID 80002)",
      "Cryptographic tamper detection proving exact byte-level integrity",
      "End-to-end CLI workflow for registration, search, and verification"
    ],
    learnings: [
      "Separation of concerns: AI for visual matching, cryptography for tamper proofing",
      "SHA-256 verifies exact byte-level integrity, while embeddings tolerate visual variance",
      "Web3.py enables direct contract calls and event log parsing from Python pipelines"
    ],
    github: "https://github.com/Pranadvaishnav/Face_Identification_-_Blockchain_Verification",
    demo: "",
    image: null
  },

  {
    id: "business-entity-resolution",
    title: "Business Entity Resolution",
    shortTitle: "Entity Resolution",
    category: "ML",
    categoryLabel: "Machine Learning",
    featured: true,
    status: "completed",
    tagline: "Matching business records across sources at scale.",
    description:
      "A large-scale business entity matching system designed to determine whether records from different sources refer to the same underlying business. The system combines classical record-linkage techniques — blocking, fuzzy matching, token overlap — with a gradient-boosted classifier to make confident match decisions.",
    problem:
      "Different data sources represent the same business in inconsistent formats — varying abbreviations, address formats, punctuation, and name variants. The task is to identify which records refer to the same entity without exhaustive pairwise comparison.",
    approach:
      "Built a multi-stage pipeline: normalize raw text fields → generate candidate pairs via blocking (character n-grams, prefix indexing) → compute rich feature vectors using exact, fuzzy, and token-based similarity → train a LightGBM classifier → tune the decision threshold using the F0.5 metric (precision-weighted).",
    pipeline: [
      { id: "source", label: "SOURCE DATA", description: "Raw business records from heterogeneous sources" },
      { id: "norm", label: "NORMALIZATION", description: "Lowercase, strip punctuation, expand abbreviations" },
      { id: "block", label: "BLOCKING / CANDIDATE GENERATION", description: "Character n-gram and prefix blocking to reduce comparison space" },
      { id: "fuzzy", label: "FUZZY MATCHING", description: "RapidFuzz token sort, partial ratio, character-level similarity" },
      { id: "features", label: "FEATURE ENGINEERING", description: "Similarity vectors combining exact, fuzzy, and token-based signals" },
      { id: "model", label: "LIGHTGBM", description: "Gradient-boosted classifier trained on labeled pairs" },
      { id: "output", label: "ENTITY MATCH / NO MATCH", description: "Binary decision with calibrated threshold for F0.5 optimization" }
    ],
    technologies: ["Python", "Pandas", "LightGBM", "RapidFuzz", "Machine Learning", "Data Processing"],
    highlights: [
      "Candidate generation via character n-gram blocking",
      "Multi-signal fuzzy matching (token sort, partial ratio, character n-gram)",
      "F0.5 metric for precision-focused threshold tuning",
      "Feature engineering from multiple text similarity dimensions",
      "Large-scale pairwise matching without exhaustive comparison"
    ],
    learnings: [
      "Blocking strategy is the most critical performance lever — aggressive blocking kills recall",
      "F0.5 penalizes false positives more than false negatives — appropriate for entity matching",
      "LightGBM handles sparse, noisy feature vectors well with minimal tuning",
      "String normalization has outsized impact on downstream matching quality"
    ],
    github: "",
    demo: "",
    image: null
  },

  {
    id: "llm-from-scratch",
    title: "LLM From Scratch",
    shortTitle: "LLM From Scratch",
    category: "LLM",
    categoryLabel: "AI / NLP",
    featured: true,
    status: "completed",
    tagline: "Understanding language models by building them from the ground up.",
    description:
      "A hands-on implementation project focused on understanding how large language models work from the inside. Rather than calling an API, this project implements tokenization (BPE), embeddings, self-attention, and a GPT-style transformer architecture from scratch using PyTorch.",
    problem:
      "Most LLM usage treats the model as a black box. To genuinely understand how language models work — attention, positional encoding, the training loop — you have to build one yourself.",
    approach:
      "Followed the architecture of GPT-style decoders step by step: implement BPE tokenization → build token and positional embeddings → implement scaled dot-product attention → stack transformer blocks → train on text datasets using HuggingFace datasets and DataLoaders.",
    pipeline: [
      { id: "text", label: "TEXT", description: "Raw text corpus for training and evaluation" },
      { id: "tokenize", label: "TOKENIZATION", description: "Split text into subword units using tiktoken-compatible vocabulary" },
      { id: "bpe", label: "BPE", description: "Byte Pair Encoding merges frequent character pairs into tokens" },
      { id: "ids", label: "TOKEN IDs", description: "Integer representation of each token in the vocabulary" },
      { id: "embed", label: "EMBEDDINGS", description: "Token embeddings + positional encodings combined" },
      { id: "attn", label: "ATTENTION", description: "Scaled dot-product multi-head self-attention mechanism" },
      { id: "tf", label: "TRANSFORMER", description: "Stacked transformer blocks with residual connections and layer norm" },
      { id: "pred", label: "PREDICTION", description: "Linear head + softmax producing next-token probability distribution" }
    ],
    pipelineTooltips: {
      tokenize: "Tokenization converts raw text into discrete units the model can process. Subword tokenization (BPE) handles rare words gracefully.",
      bpe: "Byte Pair Encoding iteratively merges the most frequent adjacent token pairs, building a vocabulary that balances character-level flexibility with word-level efficiency.",
      ids: "Each token maps to an integer ID. The model never sees text — only these integer sequences fed into an embedding lookup table.",
      embed: "Embedding layers convert integer token IDs into dense float vectors. Positional embeddings are added so the model knows where in the sequence each token sits.",
      attn: "Self-attention lets each token attend to every other token. The model learns which tokens are relevant to each other via learned query, key, and value projections.",
      tf: "A transformer block is: self-attention → residual add → layer norm → feed-forward → residual add → layer norm. Stacking these builds depth.",
      pred: "The final linear layer projects the last hidden state to vocabulary size, then softmax converts logits to probabilities for sampling or greedy decoding."
    },
    technologies: ["Python", "PyTorch", "Byte Pair Encoding", "Transformers", "Attention", "tiktoken", "HuggingFace datasets", "DataLoaders"],
    highlights: [
      "BPE tokenizer implementation",
      "Scaled dot-product self-attention from scratch",
      "GPT-style decoder architecture",
      "Training loop with DataLoaders",
      "HuggingFace datasets integration"
    ],
    learnings: [
      "Attention is fundamentally a differentiable key-value lookup",
      "Positional encoding is essential — transformers have no inherent notion of sequence order",
      "Residual connections are critical for training deep networks",
      "BPE vocabulary size is a significant tradeoff between compute and coverage"
    ],
    github: "https://github.com/Pranadvaishnav/building-llm-from-scratch",
    demo: "",
    image: null
  },

  {
    id: "vae-anomaly-detection",
    title: "VAE Anomaly Detection",
    shortTitle: "VAE Anomaly Detection",
    category: "ML",
    categoryLabel: "Deep Learning",
    featured: true,
    status: "completed",
    tagline: "Using reconstruction error to surface unusual patterns in transaction data.",
    description:
      "A Variational Autoencoder based anomaly detection system exploring how reconstruction behavior differs between normal and unusual samples. The core intuition: a VAE trained on normal patterns will reconstruct unusual inputs poorly — the reconstruction error becomes an anomaly score.",
    problem:
      "Labeled fraud data is scarce and imbalanced. Supervised classifiers struggle. An unsupervised approach using reconstruction loss allows anomaly detection without requiring labeled anomaly examples.",
    approach:
      "Train a VAE on transaction features, treating high reconstruction error as a signal for anomalous behavior. The latent space is examined to understand how normal vs. anomalous samples distribute.",
    pipeline: [
      { id: "tx", label: "TRANSACTION", description: "Input: preprocessed transaction feature vector" },
      { id: "enc", label: "ENCODER", description: "Compresses input into a latent distribution (μ, σ)" },
      { id: "latent", label: "LATENT SPACE", description: "Sampled low-dimensional representation via reparameterization trick" },
      { id: "dec", label: "DECODER", description: "Reconstructs input from the latent sample" },
      { id: "recon", label: "RECONSTRUCTION", description: "Reconstructed feature vector compared to original input" },
      { id: "score", label: "ANOMALY SCORE", description: "Reconstruction error (+ KL term) used as anomaly signal — not a confirmed fraud label" }
    ],
    technologies: ["Python", "PyTorch", "NumPy", "Pandas", "Deep Learning", "Variational Autoencoders"],
    highlights: [
      "VAE training with reconstruction + KL divergence loss",
      "Latent space visualization (2D projection)",
      "Anomaly scoring via reconstruction error",
      "Unsupervised approach — no labeled anomalies needed during training",
      "Distinction maintained between high-anomaly-score and confirmed fraud"
    ],
    learnings: [
      "The reparameterization trick enables backpropagation through stochastic sampling",
      "KL weight (β) controls latent space regularity vs. reconstruction quality tradeoff",
      "High reconstruction error signals unusualness — not necessarily malicious intent",
      "Dimensionality of latent space significantly affects what the model learns"
    ],
    github: "",
    demo: "",
    image: null
  },

  {
    id: "devops-pipeline",
    title: "DevOps CI/CD Automation Pipeline",
    shortTitle: "DevOps Pipeline",
    category: "DEVOPS",
    categoryLabel: "DevOps / Infra",
    featured: false,
    status: "completed",
    tagline: "Automated build, containerization, and AWS EC2 deployment with Jenkins & Docker.",
    description:
      "An end-to-end DevOps automation pipeline orchestrating source code integration, automated testing, container builds, and cloud deployment. Triggers build stages via Jenkinsfile on Git commits, creates containerized Docker images, and deploys services to AWS EC2.",
    problem:
      "Manual deployment workflows are error-prone, slow, and lack reproducible environments across staging and production.",
    approach:
      "Designed declarative Jenkinsfile pipelines to automate Maven compilation, Docker containerization, and deployment to AWS EC2 instances running Linux/Ubuntu.",
    pipeline: [
      { id: "git", label: "GIT COMMIT", description: "Developer pushes code changes to GitHub repository" },
      { id: "jenkins", label: "JENKINS PIPELINE", description: "Webhook triggers automated multibranch build pipeline" },
      { id: "maven", label: "MAVEN BUILD", description: "Automated compilation, dependency resolution, and test execution" },
      { id: "docker", label: "DOCKER CONTAINER", description: "Dockerfile builds self-contained lightweight application image" },
      { id: "aws", label: "AWS EC2 DEPLOY", description: "Automated deployment and port binding on cloud EC2 instance" }
    ],
    technologies: ["Docker", "Jenkins", "Git", "AWS EC2", "Maven", "Linux", "Java"],
    highlights: [
      "Declarative Jenkinsfile pipeline automation",
      "Docker multi-stage containerization",
      "AWS EC2 cloud deployment integration",
      "Automated Maven build and dependency management"
    ],
    learnings: [
      "Immutable container images eliminate environment discrepancy ('works on my machine')",
      "Declarative CI/CD pipelines provide version-controlled, reproducible deployments",
      "Automating deployment cycles dramatically shortens iteration speed"
    ],
    github: "https://github.com/Pranadvaishnav/DevOps-Project",
    demo: "",
    image: null
  },

  {
    id: "sleep-tracker",
    title: "Sleep Tracker",
    shortTitle: "Sleep Tracker",
    category: "FULLSTACK",
    categoryLabel: "Full Stack",
    featured: false,
    status: "completed",
    tagline: "Full-stack web app for logging and analyzing sleep patterns.",
    description:
      "A full-stack application for recording and analyzing sleep information through a web interface. Users can log sleep sessions, view duration trends, and explore statistics about their rest patterns.",
    problem:
      "Understanding your own sleep patterns requires consistent data collection and clear visualization — which most simple note-taking approaches don't provide.",
    approach:
      "Built a React frontend with Vite and Tailwind for the UI, backed by a Node.js/Express API connected to a PostgreSQL database via Prisma ORM, hosted on Neon's serverless Postgres.",
    pipeline: [
      { id: "react", label: "REACT", description: "Frontend: Vite + React + Tailwind CSS + Recharts for data visualization" },
      { id: "api", label: "EXPRESS API", description: "REST endpoints for sleep record CRUD operations" },
      { id: "prisma", label: "PRISMA", description: "Type-safe ORM handling schema migrations and queries" },
      { id: "db", label: "POSTGRESQL / NEON", description: "Serverless Postgres database storing all sleep records" }
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Recharts", "Node.js", "Express", "PostgreSQL", "Prisma", "Neon"],
    highlights: [
      "Full-stack architecture from UI to database",
      "Sleep duration trend charts using Recharts",
      "Prisma ORM for type-safe database access",
      "Neon serverless Postgres for cloud persistence",
      "REST API with CRUD operations"
    ],
    learnings: [
      "Prisma schema migrations are significantly smoother than raw SQL migrations",
      "Recharts makes time-series data visualization straightforward in React",
      "Neon's serverless Postgres removes the need to manage a database server"
    ],
    github: "",
    demo: "",
    image: null
  },

  {
    id: "event-management",
    title: "Event Management Platform",
    shortTitle: "Event Management",
    category: "FULLSTACK",
    categoryLabel: "Full Stack / Web",
    featured: false,
    status: "completed",
    tagline: "Node.js event management application with auth and admin controls.",
    description:
      "A JavaScript-based event management application built using Node.js and Express. Users can register, log in, browse events, participate, and receive notifications. Admins have a dedicated dashboard for managing events and users.",
    problem:
      "Event management requires coordinating users, registrations, and notifications — a good vehicle for learning full authentication flows, session management, and admin/user role separation.",
    approach:
      "Built with Node.js and Express for server-side logic, HTML/CSS for templating, and JSON-based data handling. Implements user authentication, session management, event CRUD, and role-based admin access.",
    pipeline: [
      { id: "client", label: "CLIENT", description: "Browser: HTML/CSS UI for users and admin" },
      { id: "server", label: "NODE / EXPRESS", description: "Server: routing, auth middleware, business logic" },
      { id: "data", label: "JSON / DATA", description: "Data storage layer for events, users, registrations" },
      { id: "system", label: "EVENT + USER SYSTEM", description: "Core domain: events, participants, notifications, admin controls" }
    ],
    technologies: ["JavaScript", "Node.js", "Express.js", "HTML", "CSS"],
    highlights: [
      "User authentication (signup / login / session management)",
      "Role-based access: user vs. admin",
      "Event creation, editing, and deletion",
      "User participation and registration",
      "Admin dashboard and notifications"
    ],
    learnings: [
      "Session management and cookie-based auth are foundational web concepts",
      "Middleware composition in Express keeps route handlers clean",
      "Separating admin and user flows requires careful route and UI design"
    ],
    github: "https://github.com/Pranadvaishnav/event-management",
    demo: "",
    image: null
  },

  {
    id: "graph-fraud-investigation",
    title: "Graph Fraud Investigation",
    shortTitle: "Graph Fraud",
    category: "DATA",
    categoryLabel: "Graph Analytics",
    featured: true,
    status: "completed",
    tagline: "Graph-based fraud investigation using TigerGraph and GSQL.",
    description:
      "A graph-based fraud investigation project using TigerGraph and GSQL. The system models relationships between customers, cards, and transactions as a graph, enabling traversal-based investigation of suspicious patterns — relationships that tabular databases can't efficiently express.",
    problem:
      "Fraud often operates through networks — a cluster of accounts sharing cards, unusual transaction chains, high-velocity spending across related entities. These patterns are invisible in flat tables but visible in graphs.",
    approach:
      "Modeled the domain as a property graph: Customer nodes own Card nodes, Card nodes made Transaction nodes. GSQL queries traverse these relationships to identify high-risk transactions, investigate customer networks, and surface connected suspicious activity.",
    pipeline: [
      { id: "customer", label: "CUSTOMER", description: "Customer vertex with profile attributes" },
      { id: "card", label: "CARD", description: "Payment card owned by a customer", edgeLabel: "Owns" },
      { id: "tx", label: "TRANSACTION", description: "Transaction made using a card", edgeLabel: "Made" }
    ],
    graphEdges: [
      { from: "customer", to: "card", label: "Owns" },
      { from: "card", to: "tx", label: "Made" }
    ],
    technologies: ["TigerGraph", "GSQL", "Python", "Graph Analytics"],
    highlights: [
      "Property graph modeling (Customer → Owns → Card → Made → Transaction)",
      "GSQL graph traversal queries",
      "High-risk transaction identification via graph patterns",
      "Customer network investigation across connected entities",
      "Graph-native approach to relational fraud signals"
    ],
    learnings: [
      "Graphs model many-to-many relationships more naturally than relational schemas",
      "GSQL's vertex-centric programming model takes time to internalize",
      "Graph traversal can surface fraud rings invisible in SQL aggregations",
      "Distinguishing high-risk score from confirmed fraud is essential for responsible analysis"
    ],
    github: "",
    demo: "",
    image: null
  },

  {
    id: "seismic-data-processing",
    title: "Seismic Data Processing",
    shortTitle: "Seismic Processing",
    category: "SCIENCE",
    categoryLabel: "Scientific Computing",
    featured: false,
    status: "completed",
    tagline: "Signal processing on SEG-Y seismic datasets using FFT and filtering.",
    description:
      "Processing and analysis of SEG-Y seismic datasets using signal-processing techniques in Python. The project explores how raw seismic traces can be extracted, transformed into the frequency domain, and filtered to isolate meaningful signal content.",
    problem:
      "Raw seismic traces contain noise across broad frequency bands. Understanding the frequency composition and isolating geophysically meaningful signal requires careful spectral analysis and filtering.",
    approach:
      "Load SEG-Y binary seismic data → extract individual traces → apply FFT to move from time to frequency domain → analyze spectral content → design and apply a bandpass filter → examine the processed signal.",
    pipeline: [
      { id: "segy", label: "SEG-Y DATA", description: "Binary seismic data format containing trace headers and samples" },
      { id: "extract", label: "SIGNAL EXTRACTION", description: "Parse trace headers and amplitude samples from SEG-Y binary" },
      { id: "fft", label: "FFT", description: "Fast Fourier Transform: time domain → frequency domain" },
      { id: "spectral", label: "SPECTRAL ANALYSIS", description: "Examine frequency content, identify dominant components and noise" },
      { id: "filter", label: "BANDPASS FILTER", description: "Retain geophysically relevant frequencies, attenuate noise" },
      { id: "processed", label: "PROCESSED SIGNAL", description: "Clean trace ready for interpretation" }
    ],
    technologies: ["Python", "NumPy", "Matplotlib", "FFT", "Signal Processing"],
    highlights: [
      "SEG-Y binary format parsing",
      "FFT-based spectral analysis of seismic traces",
      "Bandpass filter design and application",
      "Time-domain and frequency-domain visualization",
      "Scientific computing applied to geophysical data"
    ],
    learnings: [
      "SEG-Y is a complex binary format with header standards that vary by dataset",
      "FFT output requires careful handling of frequency resolution and aliasing",
      "Bandpass filter cutoffs require domain knowledge to choose meaningfully",
      "NumPy FFT operations are fast enough for single-trace analysis without GPUs"
    ],
    github: "https://github.com/Pranadvaishnav/Seismic-Data-Processing",
    demo: "",
    image: null
  }
];

export const getProjectById = (id) => projects.find(p => p.id === id);
export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByCategory = (cat) =>
  cat === "ALL" ? projects : projects.filter(p => p.category === cat);
