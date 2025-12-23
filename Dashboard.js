import React, { useState, useEffect } from "react";
import RepoCard from "../components/RepoCard";
import SearchBar from "../components/SearchBar";
import { fetchRepos } from "../services/githubApi";

function Dashboard() {
  const [repos, setRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      const query = searchTerm || "stars:>5000";
      const res = await fetchRepos(query);
      setRepos(res.data.items);
    } catch (error) {
      console.error("Error fetching repos:", error);
    }
  };

  // Fetch trending repos on page load
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub Repository Explorer</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;