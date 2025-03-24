import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      className="input"
      placeholder="Tìm kiếm phim..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
