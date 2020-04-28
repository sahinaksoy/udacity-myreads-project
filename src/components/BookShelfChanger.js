import React from "react";
import PropType from "prop-types";

const BookShelfChanger = (props) => {
  const { shelf, onChange } = props;
  const shelving = ["currentlyReading", "wantToRead", "read", "none"];

  return (
    <div className="book-shelf-changer">
      <select
        onChange={(e) => {
          onChange(e.value);
        }}
      >
        <option value="move" disabled>
          Move to...
        </option>
        {shelving.map((item) => (
          <option value="item" selected={item === shelf}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

BookShelfChanger.propTypes = {
  shelf: PropType.string.isRequired,
  onChange: PropType.func,
};

export default BookShelfChanger;
