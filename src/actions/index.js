import USER_LOGIN,
{ FAILED_REQUEST, GET_CURRENCY, LOADING_FETCH, GET_EXPENSES } from './actionTypes';

export const actionUser = (payload) => ({
  type: USER_LOGIN,
  email: payload,
});

const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  error,
});

const getCurrency = (json) => ({
  type: GET_CURRENCY,
  json,
});

const loadingFetch = () => ({
  type: LOADING_FETCH,
});

const getExpenses = (json, payload, id) => ({
  type: GET_EXPENSES,
  json,
  payload,
  id,
});

export function fetchCurrencies() {
  return (dispatch) => {
    dispatch(loadingFetch());
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json()
        .then(
          (json) => dispatch(getCurrency(json)),
          (error) => dispatch(failedRequest(error)),
        ));
  };
}

export function fetchExpenses(payload, id) {
  return (dispatch) => {
    dispatch(loadingFetch());
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json()
        .then(
          (json) => dispatch(getExpenses(json, payload, id)),
          (error) => dispatch(failedRequest(error)),
        ));
  };
}

export default actionUser;
