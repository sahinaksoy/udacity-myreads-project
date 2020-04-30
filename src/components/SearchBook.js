import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchBookBar from "./SearchBookBar";
import SearchBookResults from "./SearchBookResults";

class SearchBook extends Component {

  handleSearchBook = (value) => {
    // TODO: add search functionality
  };

  render() {
    return (
      <div className="search-books">
        <SearchBookBar onSearchBook={this.handleSearchBook} />
        <SearchBookResults />
      </div>
    );
  }
}
export default SearchBook;
