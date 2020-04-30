import React from "react";
import PropTypes from "prop-types";
import BookCard from "./BookCard";
const BookShelf = (props) => {
  const { shelfTitle, books, onShelfChange } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {(books.length === 0 && <p>Record not found</p>) ||
            books.map((item, index) => (
              <li key={index}>
                <BookCard
                  id={item.id}
                  title={item.title}
                  authors={item.authors}
                  shelf={item.shelf}
                  thumbnail={item.thumbnail}
                  onShelfChange={onShelfChange}
                />
              </li>
            ))}
        </ol>
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
  onShelfChange: PropTypes.func,
};

BookShelf.defaultProps = {
  shelfTitle: "",
  books: [],
};

export default BookShelf;
