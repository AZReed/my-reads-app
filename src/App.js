import React, { Component } from "react";
import * as BooksAPI from "./components/BooksAPI";
import { Route } from "react-router-dom";
import Search from "./components/Search";
import BookShelves from "./components/BookShelves";
import PropTypes from 'prop-types';

class BooksApp extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      // console.log(books)
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

BooksApp.propTypes = {
  books: PropTypes.bool,
}

export default BooksApp;
