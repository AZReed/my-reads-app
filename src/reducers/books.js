import { SET_BOOKS, FETCH_BOOKS, UPDATE_BOOK, SET_QUERY_RESULT } from "../actions/books";

const initState = {books: [], queryBooks: []};

const books = (state = initState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        books: action.payload
      };

    case FETCH_BOOKS:
      return {
        ...state,
        books: action.payload
      };

    case UPDATE_BOOK:

      /* 
      FIXME: Object.assign and spread operator seems
      to update the state object.
       */

      const _state = { ...state }

      const _books = Object.assign([], _state.books)
      console.log(action.payload)
      _books.forEach( (_book) => {
        Object.keys(action.payload).forEach( shelf => {
          let books_id = action.payload[shelf]
          books_id.forEach(book_id => {
            if (book_id === _book.id && _book.shelf !== shelf) {
              _book.shelf = shelf
            }
          })
        })
      })
      return {
        ...state,
        books: _books
      }

    case SET_QUERY_RESULT:
      return {
        ...state,
        queryBooks: action.payload.books
      }

    default:
      return {...state};
  }
};

export default books;
