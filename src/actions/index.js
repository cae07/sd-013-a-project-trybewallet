// Coloque aqui suas actions
export const SET_PERSONAL_INFO = 'SET_PERSONAL_INFO';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_EXPENSES = 'GET_EXPENSES';

export const setPersonalInfo = (email) => ({
  type: SET_PERSONAL_INFO,
  email,
});

export const getCurrencies = (payload) => ({
  type: GET_CURRENCIES,
  payload,
});

export const getExpenses = (expenses, response) => ({
  type: GET_EXPENSES,
  expenses,
  response,
});

export const getCurrenciesApi = () => async (dispatch) => {
  const fechApi = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await fechApi.json();
  const result = Object.keys(data).filter((item) => item !== 'USDT');
  dispatch(getCurrencies(result));
};

export const getExpensesApi = (expenses) => async (dispatch) => {
  try {
    const fechApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await fechApi.json();
    dispatch(getExpenses(expenses, response));
  } catch (error) {
    console.log(error);
  }
};
