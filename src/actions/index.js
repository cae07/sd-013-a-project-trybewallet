export const SET_USER = 'SET_USER';
export const SET_WALLET = 'SET_WALLET';
export const REQUEST_FAIL = 'REQUEST_FAIL';
export const SET_EXPENSE = 'SET_EXPENSE';
export const REQUEST_API = 'REQUEST_API';
export const GET_CURRENCY = 'GET_CURRENCY';
export const DELETE_ITEM = 'DELETE_ITEM';

export const setUser = (state) => ({
  type: SET_USER, state,
});

export const setWallet = (state) => ({
  type: SET_WALLET, state,
});

export const setExpense = (state) => ({
  type: SET_EXPENSE, state,
});

// ========== // ============= // ============= //

export const deleteItem = (state) => ({
  type: DELETE_ITEM, state,
});

// Requisição da API feita com ajuda do Rogério.

export const requestAPI = () => ({
  type: REQUEST_API, status: 'loading',
});

export const getCurrency = (state) => ({
  type: GET_CURRENCY, state,
});

export const requestFail = () => ({
  type: REQUEST_FAIL, status: 'Fail Request',
});

export const fetchAPI = () => async (dispatch) => {
  try {
    dispatch(requestAPI());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    return dispatch(getCurrency(data));
  } catch (error) {
    return dispatch(requestFail());
  }
};
