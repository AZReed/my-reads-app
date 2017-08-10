import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import {Link} from 'react-router-dom'
import SearchNav from './SearchNav'
import BookShelf from './BookShelf'
import './App.css'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then( books => {
      this.setState({ books })
    }) 
  }

  filterBooksByShelf = shelf => {
    return this.state.books.filter( book =>
      book.shelf === shelf
    )
  }

  render() {

    // const {books} = this.state

    return (
      <div className="app">

        <Route exact path="/search" render={ () => (
          <SearchNav />
        )}/>

        <Route exact path="/" render={ () => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf
                  shelfName="Currently Reading"
                  books={this.filterBooksByShelf('currentlyReading')}
                />
                <BookShelf
                  shelfName="Want To Read"
                  books={this.filterBooksByShelf('wantToRead')}
                />
                <BookShelf
                  shelfName="Read"
                  books={this.filterBooksByShelf('read')}
                />
              </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp