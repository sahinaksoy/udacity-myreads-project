import React, { Component } from "react";

class MyReads extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>{/* TODO: iplement BookShelf component */}</div>
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
