import getApi from '../services/api';

export const ADD_USER = 'ADD_USER';
export const UPDATE_CURRENCIES = 'UPDATE_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ADD_TOTAL = 'ADD_TOTAL';

export const actionEmail = (payload) => ({
  type: ADD_USER,
  payload,
});

export const getCurrencies = (payload) => ({
  type: UPDATE_CURRENCIES,
  payload,
});

export const addExpenseToState = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const totalUpdate = () => ({ type: ADD_TOTAL });

export const fetchCurrencies = () => (
  async (dispatch) => {
    try {
      const api = await getApi();
      const currencies = Object.keys(api).filter((key) => key !== 'USDT');
      return dispatch(getCurrencies(currencies));
    } catch (error) {
      return console.log(error.message);
    }
  }
);

export const addExpense = (payload) => (
  async (dispatch) => {
    try {
      const api = await getApi();
      delete api.USDT;
      const expense = { ...payload, exchangeRates: api };
      return dispatch(addExpenseToState(expense));
    } catch (error) {
      return console.log(error.message);
    }
  }
);
