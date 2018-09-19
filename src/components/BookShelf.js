import React from "react";
import Book from "./Book";

import { Card } from "semantic-ui-react";

const BookShelf = props => {
  return (
    <React.Fragment>
      <h2>{props.shelfName}</h2>
      <Card.Group itemsPerRow={3}>
        {props.books.map(book => (
          <Book
            key={book.id}
            book={book}
            handleChange={props.moveBookToShelf}
          />
        ))}
      </Card.Group>
    </React.Fragment>
  );
};

export default BookShelf;
// export default BookShelf;
