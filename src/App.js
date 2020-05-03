import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getAll, update } from "./BooksAPI";
import MyReads from "./components/MyReads";
import SearchBook from "./components/SearchBook";

class BooksApp extends React.Component {
  state = {
    books: [],
  };
  componentDidMount() {
    getAll().then((books) =>
      this.setState({
        books,
      })
    );
  }
  handleShelfChange = (changedBook) => {
    update(changedBook, changedBook.shelf).then((response) => {
      this.setState((prevState) => ({
        books: prevState.books
          .filter((book) => book.id !== changedBook.id)
          .concat(changedBook),
      }));
    });
  };

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <MyReads books={books} onShelfChange={this.handleShelfChange} />
              )}
            />
            <Route
              path="/search"
              render={() => (
                <SearchBook
                  books={books}
                  onShelfChange={this.handleShelfChange}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default BooksApp;
