import { ApiCoin } from '../service/ApiCoin';
// Coloque aqui suas actions

export const INPUT_EMAIL = 'INPUT_EMAIL';
export const INPUT_SENHA = 'INPUT_SENHA';

export const inputEmail = (payload) => ({
  type: INPUT_EMAIL,
  payload });

export const inputPassword = (payload) => ({
  type: INPUT_SENHA,
  payload });

export const LOADING_TYPE = 'LOADING_TYPE';
export const SUCCESS_TYPE = 'SUCCESS_TYPE';
export const ERROR_TYPE = 'ERROR_TYPE';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const isLoadingAction = () => ({
  type: LOADING_TYPE,
});

export const successAction = (payload) => ({
  type: SUCCESS_TYPE,
  payload,
});

export const errorAction = (payload) => ({
  type: ERROR_TYPE,
  payload,
});

export const addExpAction = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const fetchApiThunk = () => (dispatch) => {
  dispatch(isLoadingAction());

  return ApiCoin()
    .then(
      (response) => dispatch(successAction(response)),
      () => dispatch(errorAction()),
    );
};

export const addAPIExpense = (payload) => async (dispatch) => {
  try {
    const res = await fetch('https://economia.awesomeapi.com.br/json/all');
    if (!res.ok) throw new Error('Fetch failed');
    const data = await res.json();
    delete data.USDT;
    const expense = { ...payload, exchangeRates: data };
    return dispatch(addExpAction(expense));
  } catch (error) {
    return dispatch(errorAction(error.message));
  }
};
