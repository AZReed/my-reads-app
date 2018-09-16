import { SET_NOTIFICATION } from "../actions/notification";

const initState = [];

export const notifications = (notification = initState, action) => {
  switch (true) {
    case action.type.includes(SET_NOTIFICATION):
      return [...notification, action.payload];

    default:
      return notifications;
  }
};

export default notifications;