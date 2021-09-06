// Coloque aqui suas actions
// Action é uma função que retorna um objeto que contenha ao menos uma chave denominada "type"
import { LOGIN_ACTION, START_FETCH, GET_INFO, EXCHANGE_RATES } from './actionTypes';

export const loginAction = (email) => ({
  type: LOGIN_ACTION,
  email,
});

export const startFetch = () => ({
  type: START_FETCH,
});

export const getInfo = (json) => ({ type: GET_INFO, payload: json });

export const expenseList = (state) => ({ type: EXCHANGE_RATES, state });

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(startFetch());
  const result = await fetch('https://economia.awesomeapi.com.br/json/all');
  const resultJson = await result.json();
  dispatch(getInfo(resultJson));
};
