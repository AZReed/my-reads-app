import {
  SET_BOOKS,
  FETCH_BOOKS,
  UPDATE_BOOK,
  SET_QUERY_RESULT,
  ADD_BOOK
} from '../actions/books';

const initState = { books: [], queryBooks: [] };

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

      // console.log('UPDATE', action.payload);
      // console.log('UPDATE SYATE', state);

      const { books } = state;
      let already_moved = [];
      books.forEach(book => {
        Object.keys(action.payload).forEach(shelf => {
          // let books_id = action.payload[shelf];
          let shelve = action.payload[shelf];
          if (shelve.includes(book.id)) {
            book.shelf = shelf;
            already_moved.push(book.id);
          } else if (
            !shelve.includes(book.id) &&
            !already_moved.includes(book.id)
          ) {
            book.shelf = 'none';
          }
        });
      });
      // console.log('BOOKS', books, already_moved);
      return {
        ...state,
        books
      };

    case SET_QUERY_RESULT:
      return {
        ...state,
        queryBooks: action.payload.books
      };

    case ADD_BOOK:
      let _books = Object.assign([], state.books);
      _books.push(action.payload.book)
      return {
        ...state,
        books: _books
      };

    default:
      return { ...state };
  }
};

export default books;
