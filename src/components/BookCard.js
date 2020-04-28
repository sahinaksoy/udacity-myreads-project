import React from "react";
import PropType from "prop-types";

const BookCard = (props) => {
  const { id, title, authors, shelf } = props;
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:
              'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
          }}
        />
        {/* TODO: add book shelf changer component */}
        <div className="book-title">To Kill a Mockingbird</div>
        <div className="book-authors">Harper Lee</div>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  id: PropType.string.isRequired,
  title: PropType.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.number).isRequired,
  shelf: PropTypes.oneOf(["wantToRead", "currentlyReading", "read", "none"]),
};

export default BookCard;
