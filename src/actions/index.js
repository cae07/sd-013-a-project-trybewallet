import { LOGIN, SAVE_STATE_EXPENSES, FETCH_API_THUNK_EXCHANGE_RATES } from './actionTypes';

import fetchAPI from '../services/index';

export const loginAction = (payload) => ({
  type: LOGIN,
  payload,
});

export const saveExpensesAction = (payload) => ({
  type: SAVE_STATE_EXPENSES,
  payload,
});

export const fetchApiThunkAction = (payload) => ({
  type: FETCH_API_THUNK_EXCHANGE_RATES,
  payload,
});

export const fetchApiThunkStart = () => ({
  type: FETCH_API_THUNK_START,
});

export const fetchApiThunkFinished = () => ({
  type: FETCH_API_THUNK_FINISHED,
});

export const fetchApiThunkError = (payload) => ({
  type: FETCH_API_THUNK_ERROR,
  payload,
});

// THUNK MIDDLEWARE
// É uma função que retorna uma função
//   ()     =>   () => {}
// função() =>  função()
export const fetchApiThunk = (walletState) => async (dispatch) => {
  try {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetchAPI(URL);
    const payload = { exchangeRates: await response };
    console.log('L27', payload);
    console.log('L28', walletState);
    dispatch(fetchApiThunkAction(payload));
  } catch (error) {
    console.log(error);
  }
};
