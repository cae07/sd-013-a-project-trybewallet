import fetchApi from '../components/ApiMoedas';

export const USER_ACTION = 'USER_ACTION';
export const WALLET_ACTION = 'WALLET_ACTION';
export const SUCCESS_TYPE = 'SUCCESS_TYPE';
export const ERROR_TYPE = 'ERROR_TYPE';
export const WALLET_DESPESAS = 'WALLET_DESPESAS';
export const SEND_EXPENSE = 'SEND_EXPENSE';

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
export const errorType = (erro) => ({
  type: ERROR_TYPE,
  erro,
});

export const actionDespesas = (payload) => ({
  type: WALLET_DESPESAS,
  payload,
});

export const sendExpense = (payload) => ({
  type: SEND_EXPENSE,
  payload,
});

export const sendMoedasApi = () => (dispatch) => fetchApi()
  .then((response) => dispatch(successType(response)),
    (erro) => dispatch(errorType(erro)));

export const sendExpenseApi = (userForm) => (dispatch) => fetchApi()
  .then((data) => {
    const userInfo = {
      ...userForm,
      exchangeRates: {
        ...data,
      },
    };
    dispatch(sendExpense(userInfo));
  },
  (erro) => dispatch(errorType(erro)));
