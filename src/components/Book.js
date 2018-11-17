import React from "react";

import { Card, Image, Icon, Dropdown } from "semantic-ui-react";

const Book = props => {
  function handleImage() {
    if (props.book.imageLinks === undefined) {
      return "http://tendertiger.com/images/NoDataFound.png";
    }
    return props.book.imageLinks.smallThumbnail;
  }

  function shelves() {
    return [
      { key: "currentlyReading", value: "currentlyReading", text: "currentlyReading" },
      { key: "wantToRead", value: "wantToRead", text: "wantToRead" },
      { key: "read", value: "read", text: "read" },
      { key: "none", value: "none", text: "none" }
    ];
  }

  return (
    <Card key={props.book.id}>
      <Image src={handleImage()} />
      <Card.Content>
        <Card.Header size='tiny'>{props.book.title}</Card.Header>
        <Card.Description>{props.book.subtitle}</Card.Description>
        <Card.Meta>
          {props.book.authors && props.book.authors.join(", ")}
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="star" />
          {props.book.averageRating || " - "}
        </a>
        {" | "}
        <Dropdown
          inline
          options={shelves()}
          onChange={(event, data) => props.handleChange(props.book, data.value)}
          defaultValue={props.book.shelf || "none"}
        />
      </Card.Content>
    </Card>
  );
};

export default Book;
