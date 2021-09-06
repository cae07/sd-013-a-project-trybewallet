// Importação da função de fetch na API
import { getCoinAPI } from '../services/coinAPI';

// Página de Login
export const INPUT_EMAIL = 'INPUT_EMAIL';
export const INPUT_PASSWORD = 'INPUT_PASSWORD';

// Página da Carteira
export const LOADING_TYPE = 'LOADING_TYPE';
export const SUCCESS_TYPE = 'SUCCESS_TYPE';
export const ERROR_TYPE = 'ERROR_TYPE';

// Requisito 8:
export const ADD_EXPENSES = 'ADD_EXPENSES';

// Página de Login
export const inputEmail = (payload) => ({
  type: INPUT_EMAIL,
  payload });

export const inputPassword = (payload) => ({
  type: INPUT_PASSWORD,
  payload });

// Página da Carteira
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

// Requisito 8:
export const addExpensesAction = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

// Fazendo o fetch com a ajuda da aula 16.4 da T13A
export const fetchApiWithThunk = () => (dispatch) => {
  dispatch(isLoadingAction());

  return getCoinAPI()
    .then(
      (response) => dispatch(successAction(response)),
      () => dispatch(errorAction()),
    );
};

// Thunk do requisito 8 com a ajuda de Julia Baptista
export const addAPIExpense = (payload) => async (dispatch) => {
  try {
    const res = await fetch('https://economia.awesomeapi.com.br/json/all');
    if (!res.ok) throw new Error('Fetch failed');
    const data = await res.json();
    delete data.USDT;
    const expense = { ...payload, exchangeRates: data };
    return dispatch(addExpensesAction(expense));
  } catch (error) {
    return dispatch(errorAction(error.message));
  }
};
