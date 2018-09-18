import React, { Component, Fragment } from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";

class BookShelves extends Component {
  filterBooksByShelf = shelf => {
    return this.props.books.filter(book => book.shelf === shelf);
  };

  moveBookToShelf = (bookToMove, event) => {
    console.log('TODO: dispatch action to change shelf')
    let shelf = event.target.value;
    this.props.books.forEach(book => {
      if (book.id === bookToMove.id) {
        book.shelf = shelf;
      }
    });

    BooksAPI.update(bookToMove, shelf).then(() => {
      this.props.setBooksState(bookToMove, shelf);
    });
  };

  render() {
    const shelves = [
      { value: "currentlyReading", name: "Currently Reading" },
      { value: "wantToRead", name: "Want To Read" },
      { value: "read", name: "Read" }
    ];

    return (
      <Fragment>
        <div>
          <h1>MyReads</h1>
        </div>
          {shelves.map(shelf =>
            <BookShelf
            key={shelf.value}
            shelfName={shelf.name}
            books={this.filterBooksByShelf(shelf.value)}
            moveBookToShelf={this.moveBookToShelf}
            />
            )}
        <div>
          <Link to="/search">Add a book</Link>
        </div>
      </Fragment>
    );
  }
}

export default BookShelves;
