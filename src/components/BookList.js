import React from "react";
import PropTypes from "prop-types";
import BookCard from "./BookCard";

const BookList = (props) => {
  const { books, onShelfChange } = props;
  return (
    <ol className="books-grid">
      {(books.length === 0 && <p>Record not found</p>) ||
        books.map((item, index) => (
          <li key={index}>
            <BookCard
              id={item.id}
              title={item.title}
              authors={item.authors}
              shelf={item.shelf}
              thumbnail={
                item.imageLinks !== undefined ? item.imageLinks.thumbnail : ""
              }
              onShelfChange={onShelfChange}
            />
          </li>
        ))}
    </ol>
  );
};

BookList.propTypes = {
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
export default BookList;
