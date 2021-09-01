// Coloque aqui suas actions

import getCoins from '../services';

export const USER_INFO = 'USER_INFO';
export const LOADING_CURRENCY = 'LOADING_CURRENCY';
export const SUCESS_CURRENCY = 'SUCESS_CURRENCY';
export const FAIL_CURRENCY = 'FAIL_CURRENCY';
export const SEND_EXPENSES = 'SEND_EXPENSES';

export const sendUserInfo = (payload) => ({
  type: USER_INFO,
  payload,
});

const isLoading = () => ({
  type: LOADING_CURRENCY,
});

const sucessLoading = (payload) => ({
  type: SUCESS_CURRENCY,
  payload,
});

const failLoadind = (payload) => ({
  type: FAIL_CURRENCY,
  payload,
});

export const sendExpenses = (payload, data) => ({
  type: SEND_EXPENSES,
  payload,
  data,
});

export const fetchCurrency = () => (dispatch) => {
  dispatch(isLoading());
  return getCoins()
    .then((result) => {
      const filteredCoins = Object
        .keys(result)
        .filter((coin) => coin !== 'USDT');
      dispatch(sucessLoading(filteredCoins));
    },
    (error) => dispatch(failLoadind(error)));
};

export const fetchExchanges = (payload) => (dispatch) => {
  dispatch(isLoading());
  return getCoins()
    .then(
      (data) => dispatch(sendExpenses(payload, data)),
      (error) => dispatch(failLoadind(error)),
    );
};

// Codigo que o Leo mandou pra refatorar:
// export const fetchExchangeRatesWithUserInfo = (userForm) => (dispatch) => {
//   dispatch(actionGetCoin());
//   return getCoin()
//     .then(
//       (data) => {
//         const filteredCoins = Object
//           .entries(data)
//           .filter((coin) => coin !== 'USDT');
//         const userInfo = {
//           ...userForm,
//           exchangeRates: {
//             ...filteredCoins,
//           },
//         };
//         return dispatch(sendExpenses(userInfo));
//       },
//       () => dispatch(actionGetCoinFail()),
//     );
// };
// export const fetchExchangeRatesWithUserInfo = (userForm) => (dispatch) => {
//   dispatch(actionGetCoin());
//   return getCoin()
//     .then(
//       (data) => {
//         const userInfo = {
//           ...userForm,
//           exchangeRates: {
//             ...data,
//           },
//         };
//         return dispatch(sendExpenses(userInfo));
//       },
//       () => dispatch(actionGetCoinFail()),
//     );
// };
