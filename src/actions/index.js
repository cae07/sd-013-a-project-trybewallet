import fetchURL from '../API';
import { FINISH_FETCH, LOGIN_ACTION, START_FETCH } from './actionTypes';

// Coloque aqui suas actions
export const loginAction = (email) => ({
  type: LOGIN_ACTION,
  email,
});

export const startFetch = () => ({
  type: START_FETCH,
});

export const finishFetch = (currencyList) => ({
  type: FINISH_FETCH,
  currencyList,
});

export const fetchAction = () => async (dispatch) => {
  dispatch(startFetch());
  const results = await fetchURL();
  dispatch(finishFetch(results));
};
