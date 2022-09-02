import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ setSearchText }) => {
  return (
    <div className="Search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        onChange={(e) => setSearchText(e.target.value)}
        className="Search-input"
        type="text"
        placeholder="search..."
      />
    </div>
  );
};

export default Search;
