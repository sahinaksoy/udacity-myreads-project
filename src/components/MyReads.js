import React, { Component } from "react";
import BookShelf from "./BookShelf";
import { getAll } from "../BooksAPI";
class MyReads extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    getAll().then((books) => this.setState({ books }));
  }

  render() {
    const { books } = this.state;
    const currentlyReading = books.filter(
      (book) => book.shelf === "currentlyReading"
    );
    const wantToRead = books.filter((book) => book.shelf === "wantToRead");
    const read = books.filter((book) => book.shelf === "read");
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf shelfTitle={"Currently Reading"} books={currentlyReading} />
            <BookShelf shelfTitle={"Want to Read"} books={wantToRead} />
            <BookShelf shelfTitle={"Read"} books={read} />
          </div>
        </div>
        <div className="open-search">
          <button
            onClick={() => {
              return;
            }}
          >
            Add a book
          </button>
        </div>
      </div>
    );
  }
}

export default MyReads;
