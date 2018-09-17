import React, { Component } from "react";

import {
  Card,
  CardActionArea,
  CardMedia,
  withStyles,
  CardHeader,
} from "@material-ui/core";

const styles = theme => ({
  card: {
    maxWidth: 400,
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'row'
  },
  media: {
    height: 175,
    width: 128
  }
});

const Book = props => {

  function handleImage() {
    if (props.book.imageLinks === undefined) {
      return "http://tendertiger.com/images/NoDataFound.png";
    }
    return props.book.imageLinks.smallThumbnail;
  }

  return (
    <Card key={props.book.id} className={props.classes.card}>
      <div className={props.classes.details}>
        <CardActionArea>
          <CardMedia
            className={props.classes.media}
            component="img"
            image={handleImage()}
            />
        </CardActionArea>
        <CardHeader title={props.book.title} subheader={props.book.subtitle} />
      </div>
    </Card>
  );
}

export default withStyles(styles)(Book);
