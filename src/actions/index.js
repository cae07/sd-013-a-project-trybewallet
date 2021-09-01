import getCoins from '../services';

export const USER_INFO = 'USER_INFO';
export const LOADING_COIN = 'LOADING_COIN';
export const SUCCESS_COIN = 'SUCCESS_COIN';
export const ERROR_COIN = 'ERROR_COIN';
export const SEND_EXPENSES = 'SEND_EXPENSES';

export const sendUserInfo = (payload) => ({
  type: USER_INFO,
  payload,
});

const loadingCurrency = () => ({
  type: LOADING_COIN,
});

const successCurrency = (payload) => ({
  type: SUCCESS_COIN,
  payload,
});

const errorCurrency = (error) => ({
  type: ERROR_COIN,
  error,
});

export const sendExpenses = (payload) => ({
  type: SEND_EXPENSES,
  payload,
});

export const fetchCoin = () => (dispatch) => {
  dispatch(loadingCurrency());
  return getCoins()
    .then((result) => {
      const filteredCoins = Object
        .keys(result)
        .filter((coin) => coin !== 'USDT');
      return dispatch(successCurrency(filteredCoins));
    },
    (error) => dispatch(errorCurrency(error)));
};

export const fetchExchange = (userForm) => (dispatch) => {
  dispatch(loadingCurrency());
  return getCoins()
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
      (error) => dispatch(errorCurrency(error)),
    );
};
