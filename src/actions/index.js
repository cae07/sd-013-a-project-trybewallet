export const USER_LOGIN = 'USER_LOGIN';
export const SEND_EXPENSES = 'SEND_EXPENSES';
export const SEND_TOTAL_EXPENSES = 'SEND_TOTAL_EXPENSES';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const sendExpenses = (expenses) => ({
  type: SEND_EXPENSES,
  expenses,
});

export const sendTotalExpenses = (totalExpenses) => ({
  type: SEND_TOTAL_EXPENSES,
  totalExpenses,
});

export const receiveCurrencies = (data) => ({
  type: RECEIVE_CURRENCIES,
  data,
});

export function fetchCoins() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    return dispatch(receiveCurrencies(data));
  };
}
