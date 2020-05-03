import React from "react";
import PropTypes from "prop-types";
import BookList from "./BookList";

const BookShelf = (props) => {
  const { shelfTitle, books, onShelfChange } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <BookList books={books} onShelfChange={onShelfChange} />
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  shelfTitle: PropTypes.string,
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

BookShelf.defaultProps = {
  shelfTitle: "",
  books: [],
};

export default BookShelf;
