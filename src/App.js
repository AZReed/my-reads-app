import React, { Component } from "react";
import { Route } from "react-router-dom";
import Search from "./components/Search";
import BookShelves from "./components/BookShelves";
import { connect } from "react-redux";
import { fetchBooks } from "./actions/books";
import PropTypes from "prop-types";

import "./App.css";
import 'semantic-ui-css/semantic.min.css';

import { Container } from "semantic-ui-react";

class BooksApp extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.props.fetchBooks("");
    /*     BooksAPI.getAll().then(books => {
      this.setState({ books });
    }); */
  }

  setBooksState = (book, shelf) => {
    book.shelf = shelf;
    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat([book])
    }));
  };

  render() {
    const books = this.props.books || [];
    return (
      <Container>
          {this.props.loading === true ? <p>cargando</p> : <p>no cargando</p>}
          <Route
            exact
            path="/search"
            render={() => (
              <Search
                books={this.state.books}
                setBooksState={this.setBooksState}
              />
            )}
          />

          <Route
            exact
            path="/"
            render={() => (
              <BookShelves books={books} setBooksState={this.setBooksState} />
            )}
          />
      </Container>
    );
  }
}

BooksApp.propTypes = {
  books: PropTypes.array,
  loading: PropTypes.bool
};

function mapStateToProps({ books: { books }, ui: { loading } }) {
  // console.log("MAP",params.books)
  return { books, loading };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBooks: query => dispatch(fetchBooks(query))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksApp);
