import React from "react";
import Book from "./Book";

import { Card, Grid } from "semantic-ui-react";

const BookShelf = props => {
  return (
    <React.Fragment>
      <h2>{props.shelfName}</h2>
      <Grid.Row>
        <Card.Group>
          {props.books.map(book => (
            <Book
              key={book.id}
              book={book}
              handleChange={props.moveBookToShelf}
            />
          ))}
        </Card.Group>
      </Grid.Row>
    </React.Fragment>
  );
};

export default BookShelf;
