import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'
import SearchNav from './SearchNav'
import BookShelves from './BookShelves'
// import BookShelf from './BookShelf'
import './App.css'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    booksSearch: []
  }

  componentDidMount() {
    BooksAPI.getAll().then( books => {
      this.setState({ books })
    })
  }


  addBookToShelf = (book, shelf) => {
    book.shelf = shelf
    this.state.books.push(book)
    this.forceUpdate()
    BooksAPI.update(book, shelf)
  }

  searchQuery = (query) => {
    let me = this
    BooksAPI.search(query).then( res => {
      me.setState({ booksSearch: res })
    })
  }

  render() {

    // const {books} = this.state

    return (
      <div className="app">

        <Route exact path="/search" render={ () => (
          <SearchNav 
            searchQuery={this.searchQuery}
            booksSearch={this.state.booksSearch}
            books={this.state.books}
            addBookToShelf={this.addBookToShelf}
          />
        )}/>

        <Route exact path="/" render={ () => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelves
                books={this.state.books}
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