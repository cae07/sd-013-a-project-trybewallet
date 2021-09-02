// Coloque aqui suas actions
import actionGetCoins from '../services';

export const USER_INFO = 'USER_INFO';
export const WALLET_INFO = 'SEND_PASSWORD';
export const LOADING_COIN = 'LOADING_COIN';
export const SUCESS_COIN = 'SUCESS_COIN';
export const FAIL_COIN = 'FAIL_COIN';
export const SEND_EXPENSES = 'SEND_EXPENSES';

export const sendUserInfo = (payload) => ({
  type: USER_INFO,
  payload,
});

export const sendWalletInfo = (payload) => ({
  type: WALLET_INFO,
  payload,
});

export const loadingFetchCoin = () => ({
  type: LOADING_COIN,
});

export const sucessFetchCoin = (payload) => ({
  type: SUCESS_COIN,
  payload,
});

export const failFetchCoin = (error) => ({
  type: FAIL_COIN,
  error,
});

export const sendExpenses = (payload) => ({
  type: SEND_EXPENSES,
  payload,
});

export const fetchCoin = () => (dispatch) => {
  dispatch(loadingFetchCoin());
  return actionGetCoins()
    .then(
      (data) => {
        // ou pode ser usado o comando (delete data.USDT) que delta a chave USDT do data
        const filteredCoins = Object
          .keys(data)
          .filter((coin) => coin !== 'USDT');
        return dispatch(sucessFetchCoin(filteredCoins));
      },
      (error) => dispatch(failFetchCoin(error)),
    );
};

export const fetchExchangesRates = (userForm) => (dispatch) => {
  dispatch(loadingFetchCoin());
  return actionGetCoins()
    .then(
      (data) => {
        const userInfo = {
          ...userForm,
          exchangeRates: {
            ...data,
          },
        };
        return dispatch(sendExpenses(userInfo));
      },
      (error) => dispatch(failFetchCoin(error)),
    );
};
