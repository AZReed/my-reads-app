import { SET_LOADER } from "../actions/ui";

const initState = {
  loading: false
};

export const ui = (ui = initState, action) => {
  switch (true) {
    case action.type.includes(SET_LOADER):
      // console.log('MIDDLE UI', action.type)
      return { ...ui, loading: action.payload };

    default:
      return ui;
  }
};

export default ui;