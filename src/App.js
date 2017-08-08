import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import SearchNav from './SearchNav'
import BookShelves from './BookShelves'
import './App.css'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true
  }

  render() {
    BooksAPI.getAll().then( books => {
      for (var book in books) {
        if (books.hasOwnProperty(book)) {
          var element = books[book];
          console.log(element.shelf)
        }
      }
    })

{/*     Componentes
      App
        BookShelf
          Books
            Search */}

    return (

      <div className="app">
        {this.state.showSearchPage ? (
          <SearchNav />
        ) : (
          <BookShelves/>
        )}
      </div>
    )
  }
}

export default BooksApp