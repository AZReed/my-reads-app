import { SET_BOOKS, FETCH_BOOKS, MOVE_BOOKS } from "../actions/books";

const initState = {};

const books = (state = initState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      // console.log("REDUCER SET BOOKS", action.type, action.payload);
      return {
        ...state,
        books: action.payload
      };

    case FETCH_BOOKS:
      // console.log("REDUCER FETCH BOOKS", action.type, action);
      return {
        ...state,
        books: action.payload
      };

    case MOVE_BOOKS:
      // console.log('MOVE_BOOK REDUCER', action)
      /* const { books, bookToMove, shelf } = action.payload;
      books.forEach(book => {
        if (book.id === bookToMove.id) {
          book.shelf = shelf;
        }
      }); */
      return {
        ...state,
        // books: Object.assign([], books)
      }

    default:
      return {...state};
  }
};

export default books;
