import React from "react";
import PropTypes from "prop-types";
import BookCard from "./BookCard";
const SearchBookResults = (props) => {
  const { books, onShelfChange } = props;
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {(books.length === 0 && <p>Record not found</p>) ||
          books.map((item, index) => (
            <li key={index}>
              <BookCard
                id={item.id}
                title={item.title}
                authors={item.authors}
                shelf={item.shelf}
                thumbnail={item.imageLinks.thumbnail}
                onShelfChange={onShelfChange}
              />
            </li>
          ))}
      </ol>
    </div>
  );
};

SearchBookResults.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string).isRequired,
      shelf: PropTypes.oneOf([
        "wantToRead",
        "currentlyReading",
        "read",
        "none",
      ]),
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
      }).isRequired,
    })
  ),
  onShelfChange: PropTypes.func,
};

SearchBookResults.defaultProps = {
  books: [],
};
export default SearchBookResults;
