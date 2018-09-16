import { combineReducers } from "redux";
import books from "./books";
import notifications from "./notifications";
import ui from "./ui";

export default combineReducers({
  books,
  notifications,
  ui
});
