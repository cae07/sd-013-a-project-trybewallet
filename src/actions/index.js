export const SET_USER = 'SET_USER';
export const SET_WALLET = 'SET_WALLET';
export const REQUEST_FETCH = 'REQUEST_FECTH';
export const RECEIVE_FETCH = 'RECEIVE_FETCH,';
export const FAILL_FETCH = 'FAILL_FECTH';
export const SET_EXPENSE = 'SET_EXPENSE';

export const userAction = (payload) => ({ type: SET_USER, payload });
export const walletAction = (payload) => ({ type: SET_WALLET, payload });
export const setExpenses = (payload) => ({ type: SET_EXPENSE, payload });

// iniciar a requisição.
export const requestFetch = () => ({
  type: REQUEST_FETCH, status: 'loading',
});

// usa a requisição recebida.
export const receiveFetch = (payload) => ({
  type: RECEIVE_FETCH, payload,
});
// caso de erro.
export const faillFetch = () => ({
  type: FAILL_FETCH, status: 'Faill Request',
});

export const walletFetch = () => async (dispatch) => { // thunk declarado
  try {
    dispatch(requestFetch());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const wallet = await response.json();

    return dispatch(receiveFetch(wallet));
  } catch (error) {
    return dispatch(faillFetch());
  }
};
