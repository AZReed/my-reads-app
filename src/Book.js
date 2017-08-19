import React from "react";

const Book = props => {
  function handleImage() {
    if (props.book.imageLinks === undefined) {
      return {
        width: 128,
        height: 193,
        backgroundImage: `url(http://tendertiger.com/images/NoDataFound.png)`,
        backgroundSize: "contain"
      };
    }
    return {
      width: 128,
      height: 193,
      backgroundImage: `url(${props.book.imageLinks.smallThumbnail})`
    };
  }

  return (
    <li key={props.book.id}>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={handleImage()} />
          <div className="book-shelf-changer">
            <select
              value={props.book.shelf || "none"}
              onChange={props.handleChange.bind(this, props.book)}
            >
              <option disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">
          {props.book.title}
        </div>
        <div className="book-authors">
          {props.book.authors}
        </div>
      </div>
    </li>
  );
};

export default Book;
