import {
  errorAction,
  loadingAction,
  sucessAction,
  addExpenseAction,
} from '.';
import fetchApi from '../utils/api';

const apiWithThunk = () => (dispatch) => {
  dispatch(loadingAction());

  return fetchApi()
    .then(
      (response) => dispatch(sucessAction(response)), () => dispatch(errorAction()),
    );
};

export const fetchExpenseAPI = (payload) => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    if (!response.ok) throw new Error('Fetch failed');
    const result = await response.json();
    delete result.USDT;
    const expense = { ...payload, exchangeRates: result };

    return dispatch(addExpenseAction(expense));
  } catch (error) {
    return dispatch(errorAction(error.message));
  }
};

export default apiWithThunk;
