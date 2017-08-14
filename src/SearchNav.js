import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'

class Search extends Component {

  handleInput = event => {
    // console.log(event.target.value)
    let query = event.target.value
    this.props.searchQuery(query)
  }

  handleChange = (book, event) => {
    let shelf = event.target.value
    this.props.addBookToShelf(book, shelf)
  }

  render() {

    const booksSearch = this.props.booksSearch
    const books = this.props.books

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
          >Close</Link>
          <div className="search-books-input-wrapper">
            {/* 
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
              
              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */



            }
            <input type="text" onChange={this.handleInput} placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {booksSearch.map( (bookSearch, index) =>
              <li key={bookSearch.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookSearch.imageLinks.smallThumbnail})` }}></div>
                    <div className="book-shelf-changer">
                      {books.forEach( book => {
                        if (book.id === bookSearch.id) {
                          bookSearch.shelf = book.shelf
                        }
                      })}
                      <select value={bookSearch.shelf || "none"} onChange={this.handleChange.bind(this,bookSearch)}>
                        <option disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{bookSearch.title}</div>
                  <div className="book-authors">{bookSearch.authors}</div>
                </div>
              </li>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;