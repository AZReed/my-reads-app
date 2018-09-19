import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "../utils/BooksAPI";

import { Search as SearchInput, Card, Button } from "semantic-ui-react";

class Search extends Component {
  state = {
    searchResult: []
  };

  searchQuery = event => {
    let query = event.target.value;
    let me = this;

    BooksAPI.search(query).then(response => {
      // console.log(response)
      if (response === undefined) {
        // alert('no query')
      } else if (response.error) {
        // alert('no results')
      } else {
        response.forEach(bookSearched => {
          this.props.books.forEach(book => {
            if (book.id === bookSearched.id) {
              bookSearched.shelf = book.shelf;
            }
          });
        });

        me.setState({ searchResult: response });
      }
    });
  };

  addBookToShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.props.setBooksState(book, shelf);
    });
  };

  render() {
    const searchResult = this.state.searchResult;
    return (
      <React.Fragment>
        <Link to="/" className="close-search">
        <Button
          color='red'
          content='Close'
          icon='close'
        />
        </Link>
        <SearchInput
          input={{ icon: 'search', iconPosition: 'left' }}
          onSearchChange={this.searchQuery}
          placeholder="Search by title or author"
        />
        <input
          type="text"
          
        />
        <Card.Group itemsPerRow={3}>
          {searchResult.map(book => (
            <Book
              key={book.id}
              book={book}
              handleChange={(event, value) => this.addBookToShelf(book, value)}
            />
          ))}
        </Card.Group>
      </React.Fragment>
    );
  }
}

export default Search;
