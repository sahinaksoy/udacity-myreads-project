import React from "react";
import PropTypes from "prop-types";

const SearchBookBar = (props) => {
  const { onSearchBook } = props;

  const handleTextChange = (e) => {
    if (e.current.value.length > 3) {
      onSearchBook(e.current.value);
    }
  };
  return (
    <div className="search-books-bar">
      <button
        className="close-search"
        onClick={() => {
          return;
        }}
      >
        Close
      </button>
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
