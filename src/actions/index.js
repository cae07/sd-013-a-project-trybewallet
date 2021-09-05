export const USER_LOGGED_IN = 'user/login';
export const CURRENCIES_FETCHED = 'wallet/save_currencies';

export const userLoggedIn = (email) => ({ type: USER_LOGGED_IN, payload: email });

export const currenciesFetched = (currencies) => (
  { type: CURRENCIES_FETCHED, payload: currencies }
);
