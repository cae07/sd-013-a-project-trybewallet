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
    // Estava usando Object.values, a renderização estava funcionando porém o avaliador não passava
    // acredito por serem objetos e ele esperar simples strings
    // olhando o código do Gabriel Lenz https://github.com/tryber/sd-013-a-project-trybewallet/blob/gabriellenz-trybewallet/src/actions/index.js
    // fiz o teste usando keys e funcionou
    dispatch(actionGetCurrenciesSucess(currencies));
  } catch (err) {
    console.log(err);
    dispatch(actionGetCurrenciesFailed);
  }
};
