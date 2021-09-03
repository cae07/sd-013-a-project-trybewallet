import { LOGIN_ACTION, START_FETCH, GET_INFO } from './actionTypes';
// Coloque aqui suas actions
// Action é uma função que retorna um objeto que contenha ao menos uma chave denominada "type"

// export const LOGIN_ACTION = 'LOGIN_ACTION';

export const loginAction = (email) => ({
  type: LOGIN_ACTION,
  email,
});

export const startFetch = () => ({
  type: START_FETCH,
});

export const getInfo = (json) => ({ type: GET_INFO, payload: json });

export const fetchCurrencies = () => (dispatch) => {
  dispatch(startFetch());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((r) => r.json()
      .then(
        (json) => dispatch(getInfo(json)),
        // (error) => dispatch(failedRequest(error)),
      ));
};
