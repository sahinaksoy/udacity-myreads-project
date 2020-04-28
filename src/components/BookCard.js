import React from "react";
import PropType from "prop-types";
import BookShelfChanger from "./BookShelfChanger";
import BookCardFooter from "./BookCardFooter";

const BookCard = (props) => {
  const { id, title, authors, shelf, onShelfChange, thumbnail } = props;

  const handleShelfChange = (shelf) => {
    onShelfChange({ id, shelf });
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `'url("${thumbnail}")'`,
          }}
        />
        <BookShelfChanger shelf={shelf} onChange={handleShelfChange} />
        <BookCardFooter title={title} authors={authors} />
      </div>
    </div>
  );
};

BookCard.propTypes = {
  id: PropType.string.isRequired,
  title: PropType.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  shelf: PropTypes.oneOf(["wantToRead", "currentlyReading", "read", "none"]),
  thumbnail: PropType.string.isRequired,
};

export default BookCard;
