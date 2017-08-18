import React, { Component } from 'react';
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BookShelves extends Component {

  filterBooksByShelf = shelf => {
    return this.props.books.filter( book =>
      book.shelf === shelf
    )
  }

  moveBookToShelf = (bookToMove, event) => {
    let shelf = event.target.value
    this.props.books.forEach( book => {
      if (book.id === bookToMove.id) {
        book.shelf = shelf
        }
    })

    BooksAPI.update(bookToMove, shelf)
    this.props.setBooksState(this.props.books)
  }

  render() {

    const shelves = [{value: 'currentlyReading', name: 'Currently Reading'},
                     {value: 'wantToRead', name: 'Want To Read'},
                     {value: 'read', name: 'Read'}]

    return (
      <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {shelves.map( (shelf) => 
          <BookShelf
            key={shelf.value}
            shelfName={shelf.name}
            books={this.filterBooksByShelf(shelf.value)}
            moveBookToShelf={this.moveBookToShelf}
          />
        )}
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
      </div>
    );
  }
}

export default BookShelves;