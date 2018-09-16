import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import reducer from "../reducers";
import thunk from "redux-thunk";
import { bookMiddleware } from "../middleware/books";
import { apiMiddleware } from "../middleware/api";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const featureMiddleware = [
  bookMiddleware
]

const coreMiddleware = [
  apiMiddleware
]

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(logger, thunk, ...featureMiddleware, ...coreMiddleware))
);

export default store;
