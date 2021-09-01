// Coloque aqui suas actions

/* Colocar o email de login no estado */
export const SET_EMAIL = 'SET_EMAIL';

export const setEmail = (payload) => ({
  type: SET_EMAIL,
  ...payload,
});

/* Colocar o array de moedas no estado */
export const SET_CURRENCIES = 'SET_CURRENCIES';

export const setCurrencies = (payload) => (
  {
    type: SET_CURRENCIES,
    ...payload,
  }
);

/* Salvar uma nova despesa */
export const SAVE_EXPENSE = 'SAVE_EXPENSE';

export const saveExpense = (payload) => {
  console.log(payload);
  return ({
    type: SAVE_EXPENSE,
    ...payload,
  });
};

// _Exchange_Rates_

/* Buscando as taxas de câmbio */
export const REQUEST_EXCHANGE_RATES = 'REQUEST_EXCHANGE_RATES';

export const requestExchangeRates = () => ({
  type: REQUEST_EXCHANGE_RATES,
});

/* Colocar as taxas de câmbio de moeda no estado */
export const SET_EXCHANGE_RATES = 'SET_EXCHANGE_RATES';

export const setExchangeRates = (exchangeRates) => ({
  type: SET_EXCHANGE_RATES,
  exchangeRates,
});

/* Requisitar as taxas de câmbio de moeda */
export function fetchExchangeRates() {
  return (dispatch) => { // thunk
    dispatch(requestExchangeRates());

    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => {
        delete data.USDT;
        dispatch(setExchangeRates(data));
      });
  };
}
