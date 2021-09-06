import {
  USER_INFO,
  LOADING_TYPE,
  SUCCESS_TYPE,
  ERROR_TYPE,
  SUBMIT_TYPE,
  ADD_EXPENSE,
} from './actionTypes';
import fetchApi from '../utils/api';

// Login page

export const sendUserInfo = (payload) => ({
  type: USER_INFO,
  payload,
});

// Wallet

export const sucessAction = (payload) => ({
  type: SUCCESS_TYPE,
  payload,
});

export const errorAction = () => ({
  type: ERROR_TYPE,
});

export const loadingAction = () => ({
  type: LOADING_TYPE,
});

export const submitAction = (payload) => ({
  type: SUBMIT_TYPE,
  payload,
});

export const addExpenses = (payload) => {
  const expenseAction = {
    type: ADD_EXPENSE,
    expense: payload,
  };
  return (dispatch) => {
    dispatch(loadingAction());
    return fetchApi()
      .then(
        (response) => dispatch({
          ...expenseAction,
          expense: {
            payload, // Expenses
            response, // Exchange Rates
          },
        }),
      );
  };
};
