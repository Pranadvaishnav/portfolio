import { useEffect, useState } from "react";
import { githubUsername } from "../data/socialLinks";

const CACHE_TTL = 5 * 60 * 1000; // 5 minutes
let cache = null;
let cacheTime = 0;

export function useGitHub() {
  const [repos, setRepos] = useState([]);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!githubUsername) {
      setError("no-username");
      return;
    }

    // Return cached data if fresh
    if (cache && Date.now() - cacheTime < CACHE_TTL) {
      setRepos(cache.repos);
      setProfile(cache.profile);
      return;
    }

    setLoading(true);
    setError(null);

    const headers = { Accept: "application/vnd.github+json" };

    Promise.all([
      fetch(`https://api.github.com/users/${githubUsername}`, { headers }),
      fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=30`, { headers })
    ])
      .then(async ([profileRes, reposRes]) => {
        if (!profileRes.ok || !reposRes.ok) throw new Error("GitHub API error");
        const [profileData, reposData] = await Promise.all([
          profileRes.json(),
          reposRes.json()
        ]);
        cache = { repos: reposData, profile: profileData };
        cacheTime = Date.now();
        setProfile(profileData);
        setRepos(reposData);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return { repos, profile, loading, error };
}
