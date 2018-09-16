import { FETCH_BOOKS, BOOKS, setBooks } from "../actions/books";
import {
  API_ERROR,
  API_SUCCESS,
  apiRequest
} from "../actions/api";
import { setLoader } from "../actions/ui";
import { setNotification } from "../actions/notification";

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

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
      // console.log('BOOKS API SUCCESS', action)
      next(setBooks({ books: action.payload.books }));
      next(setLoader({ state: false, feature: BOOKS }));
      break;

    case `${BOOKS} ${API_ERROR}`:
      next(setNotification({ message: action.payload.message, feature: BOOKS }));
      next(setLoader({ state: false, feature: BOOKS }));
      break;

    default:
      break;
  }
};
