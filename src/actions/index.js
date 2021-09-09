// Coloque aqui suas actions
export const SET_LOGIN = 'SET_LOGIN';
export const SET_CURRENCIES = 'SET_CURRENCIES';

export const setLogin = (email) => ({
  type: SET_LOGIN,
  email,
});

export const setCurrencies = (state) => ({
  type: SET_CURRENCIES,
  state,
});
