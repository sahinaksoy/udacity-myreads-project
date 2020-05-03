import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchBookBar from "./SearchBookBar";
import SearchBookResults from "./SearchBookResults";
import { search } from "../BooksAPI";

class SearchBook extends Component {
  state = {
    searchResult: [],
  };

  handleOnSearchBook = (value) => {
    const { books } = this.props;
    if (value.length === 0) {
      this.setState({
        searchResult: [],
      });
      return;
    }
    search(value.trim()).then((response) => {
      if (response.error) {
        this.setState({
          searchResult: [],
        });
      } else {
        this.setState({
          searchResult: response.map((book) => {
            const existBook = books.filter((x) => x.id === book.id);
            //book shelf update if there is exist shelf
            if (existBook.length > 0) {
              book.shelf = existBook[0].shelf;
            } else {
              book.shelf = "none";
            }
            return book;
          }),
        });
      }
    });
  };

  render() {
    const { onShelfChange } = this.props;
    const { searchResult } = this.state;
    return (
      <div className="search-books">
        <SearchBookBar onSearchBook={this.handleOnSearchBook} />
        <SearchBookResults books={searchResult} onShelfChange={onShelfChange} />
      </div>
    );
  }
}

SearchBook.propTypes = {
  onShelfChange: PropTypes.func,
};

export default SearchBook;
