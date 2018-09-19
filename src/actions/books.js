export const BOOKS = "[Books]";

export const FETCH_BOOKS = `${BOOKS} FETCH`;
export const SET_BOOKS = `${BOOKS} SET`;
export const MOVE_BOOKS = `${BOOKS} MOVE`;
export const UPDATE_BOOK = `${BOOKS} UPDATE`;

export const setBooks = ({ books }) => ({
  type: SET_BOOKS,
  payload: books
});

export const fetchBooks = ({ query }) => ({
  type: FETCH_BOOKS,
  payload: query
});

export const moveBook = (books) => {
/*   books.forEach(book => {
    if (book.id === bookToMove.id) {
      book.shelf = shelf;
    }
  }); */
  return {
    type: MOVE_BOOKS,
    payload: books
  };
  /* return({
    type: MOVE,
    payload: book
  }) */
}

export const updateBook = (book) => ({
  type: UPDATE_BOOK,
  payload: book
})