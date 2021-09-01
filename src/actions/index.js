import fetchApi from '../utils/api';
import {
  USER_INFO,
  LOADING_TYPE,
  SUCCESS_TYPE,
  ERROR_TYPE,
  SUBMIT_TYPE,
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

export const apiWithThunk = () => (dispatch) => {
  dispatch(loadingAction());

  return fetchApi()
    .then(
      (response) => dispatch(sucessAction(response)), () => dispatch(errorAction()),
    );
};

export const submitAction = (payload) => ({
  type: SUBMIT_TYPE,
  payload,
});
