function SearchBar({ searchTerm, onSearch }) {
    return (
      <input
        type="text"
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        style={{ margin: "1rem 0", width: "100%", padding: "8px" }}
      />
    );
  }
  
  export default SearchBar;
  