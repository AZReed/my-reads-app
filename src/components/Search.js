import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "../utils/BooksAPI";

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

  addBookToShelf = (book, event) => {
    let shelf = event.target.value;
    book.shelf = shelf;

    BooksAPI.update(book, shelf).then(() => {
      this.props.setBooksState(book, shelf);
    });
  };

  render() {
    const searchResult = this.state.searchResult;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              onChange={this.searchQuery}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResult.map((bookSearch, index) =>
              <div key={index}>
                <Book
                  key={bookSearch.id}
                  book={bookSearch}
                  handleChange={this.addBookToShelf}
                />
              </div>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
