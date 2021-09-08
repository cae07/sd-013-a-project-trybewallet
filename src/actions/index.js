import { REQUEST_API, USER } from './actionTypes';

export const loginAction = (email) => ({
  type: USER,
  payload: email,
});

const requestApi = (json, state) => ({
  type: REQUEST_API,
  payload: json,
  state,
});

export function fetchApi(state) {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((json) => dispatch(requestApi(json, state)));
}
