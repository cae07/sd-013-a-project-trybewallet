export const ENTER_EMAIL = 'ENTER_EMAIL';
export const API_SUCESS = 'API_SUCESS';
export const API_ERROR = 'API_ERROR';
export const GET_EXPENSES = 'GET_EXPENSES';

export const getEmail = (email) => ({
  type: ENTER_EMAIL,
  email,
});

const requestSucessAPI = (payload) => ({
  type: API_SUCESS,
  payload,
});

export const errorAPI = (error) => ({
  type: API_ERROR,
  error,
});

export const expenses = (expense, data) => ({
  type: GET_EXPENSES,
  expense,
  data,
});

export const fetchAPI = () => {
  const api = fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json()
      .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))));
  return api;
};

export const getExpense = () => (dispatch) => {
  const expense = fetchAPI().then((response) => {
    const result = Object.keys(response).filter((coin) => coin !== 'USDT');
    return dispatch(requestSucessAPI(result));
  }).catch((error) => dispatch(errorAPI(error)));
  return expense;
};

export const addExpense = (expense) => (dispatch) => {
  const request = fetchAPI()
    .then((response) => dispatch(expenses(expense, response)))
    .catch((error) => dispatch(errorAPI(error)));
  return request;
};
