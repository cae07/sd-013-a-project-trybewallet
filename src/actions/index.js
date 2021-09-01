export const USER_LOGIN = 'USER_LOGIN';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const receiveCurrencies = (data) => ({
  type: RECEIVE_CURRENCIES,
  data,
});

export function fetchCoins() {
  return async (dispatch) => {
    dispatch(requestCurrencies());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    return dispatch(receiveCurrencies(data));
  };
}
