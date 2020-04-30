import React from "react";
import PropTypes from "prop-types";

const SearchBookResults = (props) => {
  const { books } = props;
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        <li>{/* TODO: add Book card component */}</li>
      </ol>
    </div>
  );
};

SearchBookResults.propTypes = {
  books: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    shelf: PropTypes.oneOf(["wantToRead", "currentlyReading", "read", "none"]),
    thumbnail: PropTypes.string.isRequired,
  }),
};

SearchBookResults.defaultProps = {
  books: [],
};
export default SearchBookResults;
