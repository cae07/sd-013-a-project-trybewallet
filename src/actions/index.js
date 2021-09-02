// Types
import getCoin from '../services';

export const USER_INFO = 'USER_INFO';
export const WALLET_INFO = 'WALLET_INFO';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

// Actions Creators
export const sendUserInfo = (payload) => ({
  type: USER_INFO,
  payload,
});

export const sendExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const editExpense = (payload) => ({
  type: EDIT_EXPENSE,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});

// Thunks
// LINK https://github.dev/tryber/sd-013-a-live-lectures/tree/lecture/16.4/isslocation
export const GET_COIN = 'GET_COIN';
export const GET_COIN_SUCCESS = 'GET_COIN_SUCCESS';
export const GET_COIN_FAIL = 'GET_COIN_FAIL';

const actionGetCoin = () => ({
  type: GET_COIN,
});

const actionGetCoinSuccess = (payload) => ({
  type: GET_COIN_SUCCESS,
  payload,
});

const actionGetCoinFail = (error) => ({
  type: GET_COIN_FAIL,
  error,
});

export const fetchCoins = () => (dispatch) => {
  dispatch(actionGetCoin());
  return getCoin()
    .then(
      (data) => {
        const filteredCoins = Object
          .keys(data)
          .filter((coin) => coin !== 'USDT');
        return dispatch(actionGetCoinSuccess(filteredCoins));
      },
      () => dispatch(actionGetCoinFail()),
    );
};

export const addExpense = (userForm) => (dispatch) => {
  dispatch(actionGetCoin());
  return getCoin()
    .then(
      (data) => {
        const userInfo = {
          ...userForm,
          exchangeRates: {
            ...data,
          },
        };
        return dispatch(sendExpense(userInfo));
      },
      () => dispatch(actionGetCoinFail()),
    );
};
