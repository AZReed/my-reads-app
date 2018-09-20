import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import Search from "./components/Search";
import BookShelves from "./components/BookShelves";
import { connect } from "react-redux";
import { fetchBooks, moveBook } from "./actions/books";
import PropTypes from "prop-types";

import "./App.css";
import "semantic-ui-css/semantic.min.css";

import { Button, Container, Loader, Segment, Dimmer } from "semantic-ui-react";

class BooksApp extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.props.fetchBooks();
  }

/*   setBooksState = (book, shelf) => {
    book.shelf = shelf;
    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat([book])
    }));
  }; */

  showLoader = () => (
    <Segment>
      <Dimmer style={{position: 'fixed'}} size='large' inverted active>
        <Loader>Loading</Loader>
      </Dimmer>
    </Segment>
  );

  render() {
    const books = this.props.books || [];
    return (
      <Container>
          <Route
            exact
            path="/search"
            render={() => (
              <Search
                books={books}
              />
            )}
          />
            <Route
              exact
              path="/"
              render={() => (
                <React.Fragment>
                  {this.props.loading === true ? (
                    this.showLoader()
                  ) : (
                    <BookShelves books={books} moveBook={this.props.moveBook} setBooksState={this.setBooksState} />
                  )}
                </React.Fragment>
              )}
            />
  
      </Container>
    )
  }
}

BooksApp.propTypes = {
  books: PropTypes.array,
  loading: PropTypes.bool
};

function mapStateToProps({ books: { books }, ui: { loading } }) {
  console.log("MAP",books)
  return { books, loading };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBooks: (query = '') => dispatch(fetchBooks(query)),
    moveBook: book => dispatch(moveBook(book))
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksApp));
