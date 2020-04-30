import React from "react";
import PropTypes from "prop-types";
import SearchBookBar from "./SearchBookBar";

const SearchBook = () => {
  const handleSearchBook = (value) => {
    // TODO: add search functionality
  };
  return (
    <div className="search-books">
      <SearchBookBar onSearchBook={handleSearchBook} />
      {/* TODO: iplement SearchBookBarResults component */}
    </div>
  );
};

export default SearchBook;
