import React from "react";
import Book from "./Book";

const BookShelf = props => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {props.shelfName}
      </h2>
      <div className="bookshelf-books">
        {props.books.map(book =>
          <Book
            key={book.id}
            book={book}
            handleChange={props.moveBookToShelf}
          />
        )}
      </div>
    </div>
  );
};

export default BookShelf;
