// Coloque aqui suas actions
export const LOG_IN = 'log_in';
export const GET_CURRENCIES_SUCESS = 'get_currencies_sucess';
export const GET_CURRENCIES_FAILED = 'get_currencies_failed';

export const actionLogIn = (payload) => ({
  type: LOG_IN,
  payload,
});

export const actionGetCurrenciesSucess = (payload) => ({
  type: GET_CURRENCIES_SUCESS,
  payload,
});

export const actionGetCurrenciesFailed = () => ({
  type: GET_CURRENCIES_FAILED,
});

export const fetchCurrencies = () => async (dispatch) => {
  try {
    const api = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await api.json();
    const currencies = Object.values(json);
    dispatch(actionGetCurrenciesSucess(currencies));
  } catch (err) {
    console.log(err);
    dispatch(actionGetCurrenciesFailed);
  }
};
