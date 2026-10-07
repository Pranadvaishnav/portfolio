import { useState } from "react";
import { useGitHub } from "../../hooks/useGitHub";
import { githubUsername } from "../../data/socialLinks";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { GithubIcon } from "../icons";

const LANG_COLORS = {
  Python: "#3572A5",
  Solidity: "#aa6746",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Java: "#b07219",
  "C++": "#f34b7d",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "Jupyter Notebook": "#DA5B0B",
};

function getRepoCategory(repo) {
  const str = `${repo.name} ${repo.description || ""} ${(repo.topics || []).join(" ")} ${repo.language || ""}`.toLowerCase();
  if (repo.language === "Solidity" || str.includes("solidity") || str.includes("blockchain") || str.includes("polygon") || str.includes("defi") || str.includes("perigee") || str.includes("facechain") || str.includes("web3") || str.includes("smart-contract")) {
    return "WEB3";
  }
  if (str.includes("llm") || str.includes("transformer") || str.includes("multivariate") || str.includes("seismic") || str.includes("learning") || str.includes("pytorch") || str.includes("classifier") || str.includes("anomaly")) {
    return "AI / ML";
  }
  return "FULL STACK";
}

function RepoCard({ repo }) {
  const category = getRepoCategory(repo);

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        padding: "20px",
        border: "1px solid #1a1a1a",
        borderRadius: 8,
        background: "#0d0d0d",
        textDecoration: "none",
        transition: "all 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#2a2a2a";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#1a1a1a";
        e.currentTarget.style.transform = "none";
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
        <p
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 12,
            fontWeight: 600,
            color: "#c0c0c0",
            margin: 0,
            letterSpacing: "0.02em",
          }}
        >
          {repo.name}
        </p>
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 7.5,
            letterSpacing: "0.1em",
            padding: "2px 6px",
            borderRadius: 10,
            background:
              category === "WEB3"
                ? "rgba(192,132,252,0.1)"
                : category === "AI / ML"
                ? "rgba(74,158,255,0.1)"
                : "rgba(74,222,128,0.1)",
            color:
              category === "WEB3"
                ? "#c084fc"
                : category === "AI / ML"
                ? "#4a9eff"
                : "#4ade80",
            border: `1px solid ${
              category === "WEB3"
                ? "rgba(192,132,252,0.2)"
                : category === "AI / ML"
                ? "rgba(74,158,255,0.2)"
                : "rgba(74,222,128,0.2)"
            }`,
            flexShrink: 0,
          }}
        >
          {category}
        </span>
      </div>

      {repo.description && (
        <p
          style={{
            color: "#666",
            fontSize: 12,
            lineHeight: 1.5,
            margin: 0,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {repo.description}
        </p>
      )}

      <div style={{ display: "flex", gap: 16, alignItems: "center", marginTop: "auto" }}>
        {repo.language && (
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: LANG_COLORS[repo.language] || "#888",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 9,
                color: "#555",
                letterSpacing: "0.06em",
              }}
            >
              {repo.language}
            </span>
          </span>
        )}
        {repo.stargazers_count > 0 && (
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Star size={10} style={{ color: "#555" }} />
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 9,
                color: "#555",
              }}
            >
              {repo.stargazers_count}
            </span>
          </span>
        )}
        {repo.forks_count > 0 && (
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <GitFork size={10} style={{ color: "#555" }} />
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 9,
                color: "#555",
              }}
            >
              {repo.forks_count}
            </span>
          </span>
        )}
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 9,
            color: "#444",
            marginLeft: "auto",
          }}
        >
          {new Date(repo.updated_at).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>
    </a>
  );
}

export default function GitHubRepos() {
  const { repos, profile, loading, error } = useGitHub();
  const [filter, setFilter] = useState("ALL");

  if (!githubUsername) {
    return (
      <div
        style={{
          border: "1px solid #1a1a1a",
          borderRadius: 8,
          padding: "32px",
          textAlign: "center",
        }}
      >
        <GithubIcon size={24} style={{ color: "#333", marginBottom: 12 }} />
        <p
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 11,
            color: "#444",
            margin: 0,
          }}
        >
          Set <code style={{ color: "#666" }}>githubUsername</code> in{" "}
          <code style={{ color: "#666" }}>src/data/socialLinks.js</code> to display live repositories.
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <p
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 10,
            color: "#444",
            letterSpacing: "0.1em",
          }}
        >
          FETCHING REPOSITORIES...
        </p>
      </div>
    );
  }

  if (error && error !== "no-username") {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <p
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 10,
            color: "#444",
          }}
        >
          Could not load repositories. Check your network or API rate limit.
        </p>
      </div>
    );
  }

  const filteredRepos = repos.filter((r) => {
    if (filter === "ALL") return true;
    return getRepoCategory(r) === filter;
  });

  return (
    <div>
      {profile && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
            padding: "16px 20px",
            border: "1px solid #1a1a1a",
            borderRadius: 8,
            background: "#0d0d0d",
          }}
        >
          {profile.avatar_url && (
            <img
              src={profile.avatar_url}
              alt={profile.login}
              style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid #222" }}
            />
          )}
          <div>
            <p
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 13,
                fontWeight: 600,
                color: "#c0c0c0",
                margin: "0 0 2px",
              }}
            >
              {profile.name || profile.login}
            </p>
            <p
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 10,
                color: "#555",
                margin: 0,
              }}
            >
              {profile.public_repos} public repositories on GitHub
            </p>
          </div>
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 9,
              letterSpacing: "0.1em",
              color: "#555",
              textDecoration: "none",
              padding: "6px 12px",
              border: "1px solid #1a1a1a",
              borderRadius: 4,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#f0f0f0";
              e.currentTarget.style.borderColor = "#444";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#555";
              e.currentTarget.style.borderColor = "#1a1a1a";
            }}
          >
            <GithubIcon size={12} />
            VIEW PROFILE ↗
          </a>
        </div>
      )}

      {/* Repository category filter */}
      <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}>
        {["ALL", "AI / ML", "WEB3", "FULL STACK"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 9.5,
              letterSpacing: "0.1em",
              padding: "5px 12px",
              borderRadius: 4,
              border: "1px solid",
              borderColor: filter === cat ? "#444" : "#1a1a1a",
              background: filter === cat ? "#1a1a1a" : "transparent",
              color: filter === cat ? "#f0f0f0" : "#666",
              cursor: "pointer",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 12,
        }}
      >
        {filteredRepos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}
