export const INSERT_EMAIL = 'INSERT_EMAIL';
export const ADD_PAYMENT = 'ADD_PAYMENT';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const DELETE_PAYMENT = 'DELETE_PAYMENT';
export const EDIT_PAYMENT = 'EDIT_PAYMENT';
const AWSOME_ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';

export const actionLogin = (email) => ({ type: INSERT_EMAIL, email });

export const getCurrencies = (currencies) => ({ type: GET_CURRENCIES, currencies });

export const addPayment = (result, paymentInfo) => ({
  type: ADD_PAYMENT,
  paymentInfo,
  result,
});

export const deletePayment = (id) => ({ type: DELETE_PAYMENT, id });

export const fetchAwsome = (action, paymentInfo) => async (dispatch) => {
  const response = await fetch(AWSOME_ENDPOINT);
  const result = await response.json();
  delete result.USDT;
  dispatch(action(result, paymentInfo));
};
