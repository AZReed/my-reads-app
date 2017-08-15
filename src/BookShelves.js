import React, { Component } from 'react';
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class BookShelves extends Component {

    moveBookToShelf = (book, shelf) => {
        this.props.books.forEach( stateBook => {
            if (stateBook.id === book.id) {
            stateBook.shelf = shelf
            }
        })
        this.forceUpdate()
        BooksAPI.update(book, shelf)
    }

    filterBooksByShelf = shelf => {
        return this.props.books.filter( book =>
            book.shelf === shelf
        )
    }

    shelves = () => {
        return [{value: 'currentlyReading', name: 'Currently Reading'},
                {value: 'wantToRead', name: 'Want To Read'},
                {value: 'read', name: 'Read'}]
    }

    render() {

        return (
            <div>
            {this.shelves().map( (shelf) => 
                <BookShelf
                  key={shelf.value}
                  shelfName={shelf.name}
                  books={this.filterBooksByShelf(shelf.value)}
                  moveBookToShelf={this.moveBookToShelf}
                />
              )}
            </div>
        );
    }
}

export default BookShelves;