import { API_REQUEST, apiSuccess, apiError } from "../actions/api";

export const apiMiddleware = ({ dispatch }) => next => action => {

  next(action)

  if (action.type.includes(API_REQUEST)) {
    const { url, method, feature, headers, body } = action.meta;
    fetch(url, { headers, method, body })
      .then(response => response.json())
      .then(response => {dispatch(apiSuccess({ response, feature }))})
      .catch(error => {dispatch(apiError({error, feature}))});
  }
};