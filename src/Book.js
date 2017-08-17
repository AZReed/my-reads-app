import React, { Component } from 'react';

class Book extends Component {

  handleImage = () => {
    if (this.props.book.imageLinks === undefined) {
      return { width: 128, height: 193, backgroundImage: `url(http://tendertiger.com/images/NoDataFound.png)`, backgroundSize: 'cover' }
    }
    return { width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }
  }

  render() {

    const book = this.props.book

    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
          {/* <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div> */}
          <div className="book-cover" style={this.handleImage()}></div>
          <div className="book-shelf-changer">
            <select value={book.shelf || 'none'} onChange={this.props.handleChange.bind(this,book)}>
            <option disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
            </select>
          </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    );
  }
}

export default Book;