import React, { useState } from "react";
import {} from "../styles/searchBar.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="search-container">
      <input
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Service or Product"
      />
    </div>
  );
};

export default SearchBar;
