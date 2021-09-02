import currenciesAPI from '../services';

// Coloque aqui suas actions
export const LOG_IN = 'log_in';
export const GET_CURRENCIES_SUCESS = 'get_currencies_sucess';
export const GET_CURRENCIES_FAILED = 'get_currencies_failed';
export const ADD_EXPENSE = 'add_expense';
export const GET_EXCHANGE_RATES_SUCESS = 'get_exchange_rates_sucess';
export const GET_EXCHANGE_RATES_FAILED = 'get_exchange_rates_failed';

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

export const actionAddExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const fetchCurrencies = () => async (dispatch) => {
  try {
    const currencies = await currenciesAPI();
    return dispatch(actionGetCurrenciesSucess(currencies));
  } catch (err) {
    console.log(err);
    dispatch(actionGetCurrenciesFailed);
  }
};
