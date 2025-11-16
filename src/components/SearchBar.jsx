import React, { useState } from "react";

export default function SearchBar({ setSearchResults }) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query) return;

    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await res.json();
    setSearchResults(data.meals);
  };

  return (
    <div className="search-container">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes..."
      />
      <button className="btn" onClick={handleSearch}>Search</button>
    </div>
  );
}
