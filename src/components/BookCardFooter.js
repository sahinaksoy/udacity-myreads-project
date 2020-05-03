import React from "react";
import PropTypes from "prop-types";

const BookCardFooter = (props) => {
  const { title, authors } = props;
  return (
    <>
      <div className="book-title">{title}</div>
      {authors.length > 0 && (
        <div className="book-authors">{authors.join(",")}</div>
      )}
    </>
  );
};

BookCardFooter.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string),
};
BookCardFooter.defaultProps = {
  authors: [],
};
export default BookCardFooter;
