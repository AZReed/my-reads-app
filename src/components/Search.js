import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "../utils/BooksAPI";

import { Input, Card, Button } from "semantic-ui-react";

class Search extends Component {
  state = {
    searchResult: [],
    isLoading: false
  };

  searchQuery = event => {
    let query = event.target.value;

    if (query.length === 0) {
      console.log("QUERY 0");
      return;
    }

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
    const { searchResult, isLoading } = this.state;

    return (
      <React.Fragment>
        <Link to="/" className="close-search">
          <Button color="red" content="Close" icon="close" />
        </Link>
        <Input
          loading={isLoading}
          icon="search"
          onChange={this.searchQuery}
          iconPosition="left"
          placeholder="Search..."
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
