import { SET_USER, SET_WALLET, SET_WALLET_SUCCESS, SET_WALLET_FAIL,
  SET_EXPENSES, SET_SUM, SET_LOADING } from './actionTypes';
import { getCurrencies } from '../services/WalletAPI';

export const setUser = (payload) => ({
  type: SET_USER, payload,
});

const setWallet = () => ({
  type: SET_WALLET,
});

const setWalletSuccess = (payload) => ({
  type: SET_WALLET_SUCCESS, payload,
});

const setWalletFail = () => ({
  type: SET_WALLET_FAIL,
});

export const setExpenses = (payload) => ({
  type: SET_EXPENSES, payload,
});

export const setSum = (payload) => ({
  type: SET_SUM, payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING, payload,
});

export const fetchCurrenciesWithThunk = () => (dispatch) => {
  dispatch(setWallet());
  return getCurrencies()
    .then(
      (data) => dispatch(setWalletSuccess(data)),
      () => dispatch(setWalletFail()),
    );
};
