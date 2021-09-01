import { GET_EMAIL, GET_API } from './actionTypes';

const moedas = 'https://economia.awesomeapi.com.br/json/all';

export const actionGetEmail = (state) => ({ type: GET_EMAIL, state });
export const actionGetAPI = (payload) => ({ type: GET_API, payload });

export function actionFetchApi() {
  return (dispatch) => fetch(moedas)
    .then((response) => response.json())
    .then((response) => (Object.keys(response)))
    .then((response) => dispatch(actionGetAPI(response)))
    .catch((error) => console.log(error));
}
