import {
  FETCH_BOOKS,
  BOOKS,
  MOVE_BOOKS,
  SEARCH_BOOKS,
  ADD_BOOK,
  setBooks,
  updateBook,
  setQueryResult,
  fetchBooks,
} from "../actions/books";
import { API_ERROR, API_SUCCESS, apiRequest } from "../actions/api";
import { setLoader } from "../actions/ui";
import { setNotification } from "../actions/notification";

let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token
};

const BOOKS_URL = "https://reactnd-books-api.udacity.com";

export const bookMiddleware = () => next => action => {
  next(action);

  switch (action.type) {
    case FETCH_BOOKS:
      next(
        apiRequest({
          body: null,
          method: "GET",
          headers,
          url: `${BOOKS_URL}/books`,
          feature: BOOKS
        })
      );
      next(setLoader({ state: true, feature: BOOKS }));
      break;

    case `${BOOKS} ${API_SUCCESS}`:
      console.log('SUCCESS')
      next(setBooks({ books: action.payload.books }));
      next(setLoader({ state: false, feature: BOOKS }));
      break;

    case `${BOOKS} ${API_ERROR}`:
      next(setNotification({ message: action.payload.message, feature: BOOKS }));
      next(setLoader({ state: false, feature: BOOKS }));
      break;

    case MOVE_BOOKS:
      const { book, shelf } = action.payload;
      next(
        apiRequest({
          body: JSON.stringify({ shelf }),
          method: "PUT",
          headers: { ...headers, "Content-Type": "application/json" },
          url: `${BOOKS_URL}/books/${book.id}`,
          feature: MOVE_BOOKS
        })
      );
      next(setLoader({ state: true, feature: MOVE_BOOKS }));
      break;

    case `${MOVE_BOOKS} ${API_SUCCESS}`:
      next(updateBook({ books: action.payload }));
      next(setLoader({ state: false, feature: MOVE_BOOKS }));
      break;

    case `${MOVE_BOOKS} ${API_ERROR}`:
      next(setNotification({ message: action.payload.message, feature: MOVE_BOOKS }));
      next(setLoader({ state: false, feature: MOVE_BOOKS }));
      break;

    case SEARCH_BOOKS:
      const { query, maxResults } = action.payload
      next(
        apiRequest({
          body: JSON.stringify({ query, maxResults }),
          method: "POST",
          headers: { ...headers, "Content-Type": "application/json" },
          url: `${BOOKS_URL}/search`,
          feature: SEARCH_BOOKS
        })
      );
      next(setLoader({ state: true, feature: SEARCH_BOOKS }));
      break;

    case `${SEARCH_BOOKS} ${API_SUCCESS}`:
      if (action.payload.books && action.payload.books.error) {
        next(setNotification({ message: action.payload.books.error, feature: SEARCH_BOOKS }));
      } else {
        next(setQueryResult({ books: action.payload }));
      }
      next(setLoader({ state: false, feature: SEARCH_BOOKS }));
      break;

    case `${SEARCH_BOOKS} ${API_ERROR}`:
      next(setNotification({ message: action.payload.message, feature: SEARCH_BOOKS }));
      next(setLoader({ state: false, feature: SEARCH_BOOKS }));
      break;

      case ADD_BOOK:
      next(
        apiRequest({
          body: JSON.stringify({ shelf: action.payload.shelf }),
          method: "PUT",
          headers: { ...headers, "Content-Type": "application/json" },
          url: `${BOOKS_URL}/books/${action.payload.book.id}`,
          feature: ADD_BOOK
        })
        );
        next(setLoader({ state: true, feature: ADD_BOOK }));
        next(setNotification({ message: 'Adding Book', feature: ADD_BOOK }));
        break

        case `${ADD_BOOK} ${API_SUCCESS}`:
        next(fetchBooks())
      break;

    default:
      break;
  }
};
