// Coloque aqui suas actions
const SET_EMAIL = 'SET_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const GET_RATES = 'GET_RATES';

export const setEmail = (payload) => (
  {
    type: SET_EMAIL, payload,
  }
);

const getCurrencies = (json) => ({
  type: GET_CURRENCIES, payload: json,
});

const failedRequest = (error) => ({
  type: FAILED_REQUEST, payload: error,
});

const getRates = (json) => ({
  type: GET_RATES, payload: json,
});

export const fetchCurrencies = () => (
  async (dispatch) => {
    try {
      const fetchAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await fetchAPI.json();
      const keys = Object.keys(data).filter((key) => key !== 'USDT');
      return dispatch(getCurrencies(keys));
    } catch (error) {
      return dispatch(failedRequest(error));
    }
  }
);

export const fetchRates = (state, id) => (
  async (dispatch) => {
    try {
      const fetchAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
      const exchangeRates = await fetchAPI.json();
      const expenseObj = { ...state, exchangeRates, id };
      return dispatch(getRates(expenseObj));
    } catch (error) {
      return dispatch(failedRequest(error));
    }
  }
);
