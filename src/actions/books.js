export const BOOKS = "[Books]";

export const FETCH_BOOKS = `${BOOKS} FETCH`;
export const SET_BOOKS = `${BOOKS} SET`;
export const MOVE_BOOKS = `${BOOKS} MOVE`;
export const UPDATE_BOOK = `${BOOKS} UPDATE`;
export const SEARCH_BOOKS = `${BOOKS} SEARCH`;
export const SET_QUERY_RESULT = `${BOOKS} QUERY_RESULT`;
export const ADD_BOOK = `${BOOKS} ADD`;

export const setBooks = ({ books }) => ({
  type: SET_BOOKS,
  payload: books
});

export const fetchBooks = () => ({
  type: FETCH_BOOKS
});

export const moveBook = (books) => ({
  type: MOVE_BOOKS,
  payload: books
})

export const updateBook = ({books}) => ({
  type: UPDATE_BOOK,
  payload: books
})

export const searchBooks = (query) => ({
  type: SEARCH_BOOKS,
  payload: query
})

export const setQueryResult = ({books}) => ({
  type: SET_QUERY_RESULT,
  payload: books
})

export const addBook = (books) => ({
  type: ADD_BOOK,
  payload: books
})