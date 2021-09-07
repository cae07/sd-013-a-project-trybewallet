// Coloque aqui suas actions
export const SET_PERSONAL_INFO = 'SET_PERSONAL_INFO';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const setPersonalInfo = (email) => ({
  type: SET_PERSONAL_INFO,
  email,
});

export const getCurrencies = (payload) => ({
  type: GET_CURRENCIES,
  payload,
});

export const getCurrenciesApi = () => async (dispatch) => {
  const fechApi = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await fechApi.json();
  const result = Object.keys(data).filter((item) => item !== 'USDT');
  dispatch(getCurrencies(result));
};
