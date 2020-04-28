import React from "react";
import PropTypes from "prop-types";

const BookShelf = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{/* TODO: add book card component */}</ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  shelfTitle: PropTypes.string,
  books: PropTypes.shape({
    id: PropType.string.isRequired,
    title: PropType.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    shelf: PropTypes.oneOf(["wantToRead", "currentlyReading", "read", "none"]),
    thumbnail: PropType.string.isRequired,
  }),
};

BookShelf.defaultProps = {
  shelfTitle: "",
  books: [],
};

export default BookShelf;
