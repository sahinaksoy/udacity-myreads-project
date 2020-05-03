import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
  handleShelfChange = (values) => {
    update({ id: values.id }, values.shelf).then((response) => {
      console.log(response);
      this.setState((prevState) => ({
        books: prevState.books.map((book) => {
          //update book shelf value in state
          if (book.id == values.id) {
            book.shelf = values.shelf;
          }
          return book;
        }),
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
            <Route exact path="/search" component={SearchBook} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default BooksApp;
