import { SET_BOOKS, FETCH_BOOKS } from "../actions/books";

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

    default:
      return state;
  }
};

export default books;
