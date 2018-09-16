export const API_REQUEST = 'API_REQUEST'
export const API_SUCCESS = 'API_SUCCESS'
export const API_ERROR = 'API_ERROR'

export const apiRequest = ({ body , headers, method, url, feature }) => {
  // console.log("API request action", headers)
  return ({
  type: `${feature} ${API_REQUEST}`,
  payload: body,
  meta: { method, url, feature, headers }
})}

export const apiSuccess = ({ response, feature }) => {
  // console.log("API success action", feature, response)
  return ({
  type: `${feature} ${API_SUCCESS}`,
  payload: response,
  meta: { feature }
})}

export const apiError = ({ error, feature }) => ({
  type: `${feature} ${API_ERROR}`,
  payload: error,
  meta: { feature }
})