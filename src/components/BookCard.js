import React from "react";
import PropTypes from "prop-types";
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
            backgroundImage: `url("${thumbnail}")`,
          }}
      
      />
      <BookShelfChanger shelf={shelf} onChange={handleShelfChange} />
      </div>
      <BookCardFooter title={title} authors={authors} />
    </div>
    
  );
};

BookCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  shelf: PropTypes.oneOf(["wantToRead", "currentlyReading", "read", "none"]),
  thumbnail: PropTypes.string.isRequired,
};

export default BookCard;
