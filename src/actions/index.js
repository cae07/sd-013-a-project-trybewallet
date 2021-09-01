export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_WALLET_EXPENSES = 'SUBMIT_WALLET_EXPENSES';
export const SUBMIT_WALLET_CURRENCIES = 'SUBMIT_WALLET_CURRENCIES';
export const REQUEST_API = 'REQUEST_API';

export const actionRegisterUser = (payload) => ({
  type: SUBMIT_LOGIN,
  payload,
});

export const actionSetExpenses = (expense, response) => ({
  type: SUBMIT_WALLET_EXPENSES,
  expense,
  response,
});

export const actionSetCurrencies = (currencies) => ({
  type: SUBMIT_WALLET_CURRENCIES,
  currencies,
});

export const requestAPI = () => ({
  type: REQUEST_API,
});

export function requestExchange(expense) {
  return async (dispatch) => {
    try {
      dispatch(requestAPI());
      const response = await (await fetch('https://economia.awesomeapi.com.br/json/all')).json();
      dispatch(actionSetExpenses(expense, response));
    } catch (error) {
      console.log(error);
    }
  };
}

export function requestCurrencies() {
  return async (dispatch) => {
    const obj = await (await fetch('https://economia.awesomeapi.com.br/json/all')).json();
    const result = Object.keys(obj).filter((item) => item !== 'USDT');
    dispatch(actionSetCurrencies(result));
  };
}
