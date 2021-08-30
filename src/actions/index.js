// Coloque aqui suas actions
import { GET_EXCHANGE_RATE, ADD_USER, IS_FETCHING } from './actionTypes';

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export const getExchangeRate = (payload) => ({
  type: GET_EXCHANGE_RATE,
  payload,
});

export const isFetching = () => ({
  type: IS_FETCHING,
});

const filterCurrencies = (currencies) => {
  const currenciesValues = Object.values(currencies);
  return currenciesValues.filter((currency) => currency.codein === 'BRL');
};

export const getApiInfo = () => (dispatch) => {
  dispatch(isFetching());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => {
      const dataFiltered = filterCurrencies(data);
      return dispatch(getExchangeRate(dataFiltered));
    });
};
