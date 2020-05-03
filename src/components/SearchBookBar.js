import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SearchBookBar = (props) => {
  const { onSearchBook } = props;

  const handleTextChange = (e) => {
    if (e.target.value.length >= 3) {
      onSearchBook(e.target.value);
    }
  };
  return (
    <div className="search-books-bar">
      <Link to="/">
        <button className="close-search">Close</button>
      </Link>

      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          onChange={handleTextChange}
        />
      </div>
    </div>
  );
};

SearchBookBar.propTypes = {
  onSearchBook: PropTypes.func,
};

export default SearchBookBar;
