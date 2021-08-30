export const REGISTER_USER = 'REGISTER_USER';
export const UPDATE_CURRENCIES = 'UPDATE_CURRENCIES';
export const ERROR = 'ERROR';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const UPDATE_TOTAL = 'UPDATE_TOTAL';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_MODE = 'EDIT_MODE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const registerUser = (payload) => ({
  type: REGISTER_USER,
  payload,
});

export const updateCurrencies = (payload) => ({
  type: UPDATE_CURRENCIES,
  payload,
});

export const errorHandler = (payload) => ({
  type: ERROR,
  payload,
});

export const updateTotal = () => ({
  type: UPDATE_TOTAL,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});

export const editMode = (payload) => ({
  type: EDIT_MODE,
  payload,
});

export const editExpense = (payload) => ({
  type: EDIT_EXPENSE,
  payload,
});

export const fetchCurrencies = () => (
  async (dispatch) => {
    try {
      const res = await fetch('https://economia.awesomeapi.com.br/json/all');
      if (!res.ok) throw new Error('Couldn\'t fetch data');
      const data = await res.json();
      const currencies = Object.keys(data).filter((key) => key !== 'USDT');
      return dispatch(updateCurrencies(currencies));
    } catch (error) {
      return dispatch(errorHandler(error.message));
    }
  }
);

export const addExpen = (payload) => (
  async (dispatch) => {
    try {
      const res = await fetch('https://economia.awesomeapi.com.br/json/all');
      if (!res.ok) throw new Error('Couldn\'t fetch data');
      const data = await res.json();
      delete data.USDT;
      const expense = { ...payload, exchangeRates: data };
      return dispatch(addExpense(expense));
    } catch (error) {
      return dispatch(errorHandler(error.message));
    }
  }
);
