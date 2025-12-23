import React from "react";
import Charts from "./Charts";

function RepoCard({ repo }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="font-bold text-lg">{repo.name}</h2>
      <p className="text-sm">{repo.description}</p>
      <p>⭐ Stars: {repo.stargazers_count}</p>
      <p>📝 Language: {repo.language}</p>
      <div className="mt-4">
        <Charts repo={repo} />
      </div>
    </div>
  );
}

export default RepoCard;