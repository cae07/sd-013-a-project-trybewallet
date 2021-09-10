import {
  USER_INFO,
  LOADING_TYPE,
  SUCCESS_TYPE,
  ERROR_TYPE,
  SUBMIT_TYPE,
  ADD_EXPENSES,
  DELETE_PAYMENT,
} from './actionTypes';

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

export const addExpenseAction = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const deleteExpense = (id) => ({
  type: DELETE_PAYMENT,
  id,
});
