import { SET_NOTIFICATION } from "../actions/notification";

const initState = {
  notification: ''
};

export const notifications = (notification = initState, action) => {
  switch (true) {
    case action.type.includes(SET_NOTIFICATION):
      console.log('notification', action, notification)
      return {...notification, message: action.payload};

    default:
      return notification;
  }
};

export default notifications;