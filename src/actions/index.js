// User
// -------------------------------------------------
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';

export const loginSubmit = (email) => (
  { type: LOGIN_SUBMIT, payload: email }
);
// -------------------------------------------------

// Wallet
// -------------------------------------------------

export const REQUEST_API = 'REQUEST_API';
export const GET_INFO = 'GET_INFO';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DISPLAY_TOTAL_EXPENSES = 'DISPLAY_TOTAL_EXPENSES';

export const requestApi = () => ({ type: REQUEST_API });
export const getInfo = (json) => ({ type: GET_INFO, payload: json });
export const failedRequest = (error) => ({ type: FAILED_REQUEST, payload: error });
export const addExpense = (payload) => ({ type: ADD_EXPENSE, payload });
export const updateTotalExpenses = (number) => ({
  type: DISPLAY_TOTAL_EXPENSES,
  payload: number,
});

// função assincrona para chamar as actions
export const fetchCurrencies = () => (dispatch) => {
  dispatch(requestApi());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((r) => r.json()
      .then(
        (json) => dispatch(getInfo(json)),
        (error) => dispatch(failedRequest(error)),
      ));
};
