import { SET_NOTIFICATION } from "../actions/notification";

const initState = {
  message: '',
};

export const notifications = (state = initState, action) => {
  switch (true) {
    case action.type.includes(SET_NOTIFICATION):
      console.log('notification', action, state)
      return {...state, message: action.payload};

    default:
      return {...state};
  }
};

export default notifications;