import React from "react";
import PropTypes from "prop-types";

const BookCardFooter = (props) => {
  const { title, authors } = props;
  return (
    <>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors.join(",")}</div>
    </>
  );
};

BookCardFooter.propTypes = {
  title: PropType.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default BookCardFooter;
