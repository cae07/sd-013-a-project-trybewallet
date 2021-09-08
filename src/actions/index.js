import fetchApi from '../components/ApiMoedas';

export const USER_ACTION = 'USER_ACTION';
export const WALLET_ACTION = 'WALLET_ACTION';
export const SUCCESS_TYPE = 'SUCCESS_TYPE';
export const ERROR_TYPE = 'ERROR_TYPE';

export const salvarStore = (payload) => ({
  type: USER_ACTION,
  payload,
});
export const sendWalletInfo = (payload) => ({
  type: WALLET_ACTION,
  payload,
});
export const successType = (payload) => ({
  type: SUCCESS_TYPE,
  payload,
});
export const errorType = () => ({
  type: ERROR_TYPE,
});

export const sendMoedasApi = () => (dispatch) => fetchApi()
  .then((response) => dispatch(successType(response)), () => dispatch(errorType()));
