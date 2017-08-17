import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Search extends Component {

  state = {
    booksSearch: []
  }

  searchQuery = (event) => {
    let query = event.target.value
    let me = this

    BooksAPI.search(query).then( response => {
      // console.log(response)
      if (response === undefined) {
        // alert('no query')
      } else if ( response.error ){
        // alert('no results')
      } else {
        me.setState({ booksSearch: response })
      }
    })
  }

  addBookToShelf = (book, event) => {
    let shelf = event.target.value
    book.shelf = shelf

    BooksAPI.update(book, shelf)

    this.props.books.push(book)
    this.props.setBooksState(this.props.books)

    alert('book added to shelf')
  }

  render() {

    const booksSearch = this.state.booksSearch
    const books = this.props.books

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
          >Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" onChange={this.searchQuery} placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <div id='msg'></div>
          <ol className="books-grid">
            {booksSearch.map( (bookSearch, index) =>
              <div key={index}>
                {books.forEach( book => {
                  if (book.id === bookSearch.id) {
                    bookSearch.shelf = book.shelf
                  }
                })}
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