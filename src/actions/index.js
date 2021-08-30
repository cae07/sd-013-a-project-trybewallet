export const REGISTER_USER = 'REGISTER_USER';
export const IS_FETCHING = 'IS_FETCHING';
export const UPDATE_CURRENCIES = 'UPDATE_CURRENCIES';
export const ERROR = 'ERROR';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const UPDATE_TOTAL = 'UPDATE_TOTAL';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const registerUser = (payload) => ({
  type: REGISTER_USER,
  payload,
});

export const isFetching = () => ({
  type: IS_FETCHING,
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

export const addExpen = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});

export const fetchCurrencies = () => (
  async (dispatch) => {
    dispatch(isFetching());
    try {
      const res = await fetch('https://economia.awesomeapi.com.br/json/all');
      if (!res.ok) throw new Error('Couldn\'t fetch data');
      const data = await res.json();
      delete data.USDT;
      return dispatch(updateCurrencies(data));
    } catch (error) {
      return dispatch(errorHandler(error.message));
    }
  }
);
