export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const SUCESS_REQUEST = 'SUCESS_REQUEST';
export const SET_EXPENSE = 'SET_EXPENSE';

export const setUserEmail = (email) => ({
  type: SET_USER_EMAIL,
  email,
});

const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

const sucessRequest = (payload) => ({
  type: SUCESS_REQUEST,
  payload,
});

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(requestCurrencies());
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await request.json();
  dispatch(sucessRequest(response));
};

const mountExpenseObj = (id, payload, response) => ({
  type: SET_EXPENSE,
  id,
  payload,
  response,
});

export const saveExpense = (id, payload) => async (dispatch) => {
  dispatch(requestCurrencies());
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await request.json();
  dispatch(mountExpenseObj(id, payload, response));
};
