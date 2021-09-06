import { LOGIN, FETCH_API } from './actionTypes';

export const loginAction = (payload) => ({
  type: LOGIN,
  payload,
});

export const fetchCurrency = (payload) => ({
  type: FETCH_API,
  payload,
});
