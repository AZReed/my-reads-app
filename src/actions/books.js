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
  return {
    type: MOVE_BOOKS,
    payload: books
  };
}

export const updateBook = ({books}) => ({
  type: UPDATE_BOOK,
  payload: books
})