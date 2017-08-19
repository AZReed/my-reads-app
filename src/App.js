import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import Search from "./Search";
import BookShelves from "./BookShelves";
import "./App.css";

class BooksApp extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  setBooksState = (book, shelf) => {
    book.shelf = shelf;
    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat([book])
    }));
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/search"
          render={() =>
            <Search
              books={this.state.books}
              setBooksState={this.setBooksState}
            />}
        />

        <Route
          exact
          path="/"
          render={() =>
            <BookShelves
              books={this.state.books}
              setBooksState={this.setBooksState}
            />}
        />
      </div>
    );
  }
}

export default BooksApp;
