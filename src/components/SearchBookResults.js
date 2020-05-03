import React from "react";
import PropTypes from "prop-types";
import BookList from "./BookList";

const SearchBookResults = (props) => {
  const { books, onShelfChange } = props;
  return (
    <div className="search-books-results">
      <BookList books={books} onShelfChange={onShelfChange} />
    </div>
  );
};

SearchBookResults.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string),
      shelf: PropTypes.oneOf([
        "wantToRead",
        "currentlyReading",
        "read",
        "none",
      ]),
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string,
      }),
    })
  ),
  onShelfChange: PropTypes.func,
};

SearchBookResults.defaultProps = {
  books: [],
};
export default SearchBookResults;
