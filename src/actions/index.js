export const ENTER_EMAIL = 'ENTER_EMAIL';
export const API_CURRENCIES = 'API_CURRENCIES';

export const getEmail = (email) => ({
  type: ENTER_EMAIL,
  email,
});

const apiCurrencies = (payload) => ({
  type: API_CURRENCIES,
  payload,
});

export function fetchAPI() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    dispatch(apiCurrencies(Object.keys(data).filter((moeda) => moeda !== 'USDT')));
  };
}
