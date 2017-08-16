import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import SearchNav from './SearchNav'
import BookShelves from './BookShelves'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then( books => {
      this.setState({ books })
    })
  }

  setBooksState = books => {
    this.setState({ books })
  }

  render() {

    return (
      <div className="app">

        <Route exact path="/search" render={ () => (
          <SearchNav 
            books={this.state.books}
            setBooksState={this.setBooksState}
          />
        )}/>

        <Route exact path="/" render={ () => (
          <BookShelves
            books={this.state.books}
            setBooksState={this.setBooksState}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp