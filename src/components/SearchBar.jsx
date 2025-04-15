import React from "react";

function SearchBar({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search expenses..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      style={{ marginBottom: "10px", width: "100%" }}
    />
  );
}

export default SearchBar;


