import React from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MyReads = (props) => {
  const { books, onShelfChange } = props;
  const currentlyReading = books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = books.filter((book) => book.shelf === "wantToRead");
  const read = books.filter((book) => book.shelf === "read");

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            shelfTitle={"Currently Reading"}
            books={currentlyReading}
            onShelfChange={onShelfChange}
          />
          <BookShelf
            shelfTitle={"Want to Read"}
            books={wantToRead}
            onShelfChange={onShelfChange}
          />
          <BookShelf
            shelfTitle={"Read"}
            books={read}
            onShelfChange={onShelfChange}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
};

MyReads.propTypes = {
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

export default MyReads;
