import React from "react";

function SearchBar({ searchTerm, setSearchTerm, handleSearch }) {
  return (
    <div className="mb-4 flex gap-2">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search GitHub repositories..."
        className="border p-2 rounded flex-1"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;