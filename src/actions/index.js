export const REGISTER_USER = 'REGISTER_USER';
export const UPDATE_CURRENCIES = 'UPDATE_CURRENCIES';
export const UPDATE_EXPENSES = 'UPDATE_EXPENSES';
export const UPDATE_CURRENCIES_FULL = 'UPDATE_CURRENCIES_FULL';

export const registerUser = (payload) => ({
  type: REGISTER_USER,
  payload,
});

export const updateCurrencies = (payload) => ({
  type: UPDATE_CURRENCIES,
  payload,
});

export const updateExpenses = (payload) => ({
  type: UPDATE_EXPENSES,
  payload,
});

export const updateCurrenciesFull = (payload) => ({
  type: UPDATE_CURRENCIES_FULL,
  payload,
});

export const fetchMoedas = () => (
  async (dispatch) => {
    const listaMoedas = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await listaMoedas.json();
    // const moedas = Object.keys(data).filter((a) => a !== 'USDT');
    return dispatch(updateCurrencies(data));
  }
);
