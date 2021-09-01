// Coloque aqui suas actions
import getCoin from '../services';

export const USER_INFO = 'USER_INFO';
export const LOADING_COIN = 'LOADING_COIN';
export const SUCESS_COIN = 'SUCESS_COIN';
export const FAIL_COIN = 'FAIL_COIN';
export const SUCESS_ATUAL = 'SUCESS_ATUAL';

export const sendUserInfo = (payload) => ({
  type: USER_INFO,
  payload,
});

const isLoading = () => ({
  type: LOADING_COIN,
});

const sucessRequest = (payload) => ({
  type: SUCESS_COIN,
  payload,
});

const failRequest = (payload) => ({
  type: FAIL_COIN,
  payload,
});

const sucessAtual = (expenses, data) => ({
  type: SUCESS_ATUAL,
  expenses,
  data,
});

export const fetchCoin = () => (dispatch) => {
  dispatch(isLoading());
  return getCoin()
    .then((results) => {
      const filteredResults = Object.keys(results).filter((result) => result !== 'USDT');
      return dispatch(sucessRequest(filteredResults));
    })
    .catch((error) => dispatch(failRequest(error)));
};

export const fetchCoinAtual = (expenses) => (dispatch) => {
  dispatch(isLoading());
  return getCoin()
    .then((res) => dispatch(sucessAtual(expenses, res)))
    .catch((error) => dispatch(failRequest(error)));
};
