export const LOGIN_NAME = 'LOGIN_NAME';
export const WALLET = 'WALLET';
export const REQUEST_FETCH = 'REQUEST_FECTH';
export const RECEIVE_FETCH = 'RECEIVE_FETCH,';
export const FAIL_FETCH = 'FAIL_FECTH';
export const SET_EXPENSE = 'SET_EXPENSE';

export const loginName = (payload) => ({
  type: LOGIN_NAME,
  payload,
});

export const wallet = (payload) => ({
  type: WALLET,
  payload,
});

export const requestFetch = () => ({
  type: REQUEST_FETCH, status: 'loading',
});

export const receiveFetch = (payload) => ({
  type: RECEIVE_FETCH, payload,
});

export const faillFetch = () => ({
  type: FAIL_FETCH, status: 'Faill Request',
});

export const setExpense = (payload) => ({
  type: SET_EXPENSE,
  payload,
});

export const walletFetch = () => async (dispatch) => {
  try {
    dispatch(requestFetch());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const wallet2 = await response.json();

    return dispatch(receiveFetch(wallet2));
  } catch (error) {
    return dispatch(faillFetch());
  }
};
