import React from "react";
import PropTypes from "prop-types";
import SearchBookBar from "./SearchBookBar";
import SearchBookResults from "./SearchBookResults";

const SearchBook = () => {

  const handleSearchBook = (value) => {
    // TODO: add search functionality
  };
  
  return (
    <div className="search-books">
      <SearchBookBar onSearchBook={handleSearchBook} />
      <SearchBookResults />
    </div>
  );
};

export default SearchBook;
