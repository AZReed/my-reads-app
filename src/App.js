import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import Search from "./components/Search";
import BookShelves from "./components/BookShelves";
import { connect } from "react-redux";
import { fetchBooks, moveBook, searchBooks } from "./actions/books";
import { setNotification } from "./actions/notification";
import PropTypes from "prop-types";

import "./App.css";
import "semantic-ui-css/semantic.min.css";

import { Message, Container, Loader, Segment, Dimmer } from "semantic-ui-react";

class BooksApp extends Component {

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

  handleDismiss = () => {
    this.props.setNotification({message: '', feature: 'MANUAL'})
  }

  showMessage = (message) => (
    <Message
      onDismiss={this.handleDismiss}
      header='Notification'
      content={message}
    />
  )

  render() {
    const {books, queryBooks, loading, message} = this.props;
    return (
      <Container>
        {message.length > 0 ? (
          this.showMessage(message)
        ):(
          null
        )}
        <Route
          exact
          path="/search"
          render={() => (
            <Search
              books={books}
              queryBooks={queryBooks}
              searchBooks={this.props.searchBooks}
              loading={loading}
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

function mapStateToProps({ books: { books, queryBooks }, ui: { loading }, notifications: {message} }) {
  console.log("MAP",books, queryBooks, message)
  return { books, loading, queryBooks, message };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBooks: (query = '') => dispatch(fetchBooks(query)),
    moveBook: book => dispatch(moveBook(book)),
    searchBooks: query => dispatch(searchBooks(query)),
    setNotification: message => dispatch(setNotification(message))
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksApp));
