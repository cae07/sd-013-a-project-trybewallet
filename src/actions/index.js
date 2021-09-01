import fetchApi from '../utils/api';

// Login page
export const USER_INFO = 'USER_INFO';
export const WALLET_INFO = 'WALLET_INFO';

export const sendUserInfo = (payload) => ({
  type: USER_INFO,
  payload,
});

// Wallet
export const LOADING_TYPE = 'LOADING_TYPE';
export const SUCCESS_TYPE = 'SUCCESS_TYPE';
export const ERROR_TYPE = 'ERROR_TYPE';

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
