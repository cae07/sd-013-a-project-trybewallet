export const ADD_USER = 'USER';
export const WALLET = 'WALLET';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export const wallet = (payload) => ({
  type: WALLET,
  payload,
});

export const walletCurrency = (payload) => ({
  type: ADD_CURRENCIES,
  payload,
});

export const fetchCoins = () => async (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((json) => dispatch(walletCurrency({
      currencies: json,
    })));
};
