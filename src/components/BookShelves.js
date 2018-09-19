import React, { Component, Fragment } from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";

import { Button } from "semantic-ui-react";

class BookShelves extends Component {
  filterBooksByShelf = shelf => {
    return this.props.books.filter(book => book.shelf === shelf);
  };

  moveBookToShelf = (book, shelf) => {
/*     this.props.books.forEach(book => {
      if (book.id === bookToMove.id) {
        book.shelf = shelf;
      }
    }); */
    if (shelf !== book.shelf) {
      console.log("DENTRO")
      this.props.moveBook({ book, shelf})
    }

/*     BooksAPI.update(bookToMove, shelf).then((data) => {
      // this.props.setBooksState(bookToMove, shelf);
    }); */
  };

  render() {
    const shelves = [
      { value: "currentlyReading", name: "Currently Reading" },
      { value: "wantToRead", name: "Want To Read" },
      { value: "read", name: "Read" }
    ];

    return (
      <Fragment>
        <Link to="/search">
          <Button content='Add Book' icon='add circle' labelPosition='left' />
        </Link>
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
      </Fragment>
    );
  }
}

export default BookShelves;
