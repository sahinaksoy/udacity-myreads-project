import React from "react";
import PropType from "prop-types";

const BookShelfChanger = (props) => {
  const { shelf, onChange } = props;
  const shelving = ["currentlyReading", "wantToRead", "read", "none"];
  return (
    <div className="book-shelf-changer">
      <select
        onChange={(e) => {
          onChange(e.target.value);
        }}
        defaultValue={shelving.filter((x) => x === shelf)[0]}
      >
        <option value="move" key={0} disabled>
          Move to...
        </option>
        {shelving.map((item, index) => (
          <option value={item} key={++index}>
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
