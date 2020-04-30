import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchBookBar from "./SearchBookBar";
import SearchBookResults from "./SearchBookResults";
import { search } from "../BooksAPI";
class SearchBook extends Component {
  state = {
    books: [],
  };

  handleSearchBook = (value) => {
    search(value).then((books) => this.setState({ books }));
  };

  render() {
    const { books } = this.state;
    return (
      <div className="search-books">
        <SearchBookBar onSearchBook={this.handleSearchBook} />
        <SearchBookResults books={books} />
      </div>
    );
  }
}
export default SearchBook;
