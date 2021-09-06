import fetchMoeda from '../services/APIMoeda';

export const LOGIN_USER = 'LOGIN_USER';
export const WALLET_DATA = 'WALLET_DATA';
export const ACTION_REQUEST_START = 'ACTION_REQUEST_START';
export const ACTION_REQUEST_SUCCESS = 'ACTION_REQUEST_SUCCESS';
export const ACTION_REQUEST_FAIL = 'ACTION_REQUEST_FAIL';
export const SEND_EXPENSES = 'SEND_EXPENSES';

export const loginEmail = (payload) => ({
  type: LOGIN_USER,
  payload,
});

export const walletData = (payload) => ({
  type: WALLET_DATA,
  payload,
});

// Action para gerar o request para conexao com a API de Moedas
// para tentar fazer a fetch na API não é necessário passar parametro
export const actionRequestMoeda = () => ({
  type: ACTION_REQUEST_START,
});

// Esta action é quando obtiver o retorno positivo de conexão com a API de Moedas
export const actionRequestCurrenciesSuccess = (currencies) => ({
  type: ACTION_REQUEST_SUCCESS,
  currencies,
});

// Esta action é quando obtiver o retorno negativo de onexão com a API de Moedas
export const actionRequestCurrenciesFail = (error) => ({
  type: ACTION_REQUEST_FAIL,
  error,
});

export const sendExpenses = (payload) => ({
  type: SEND_EXPENSES,
  payload,
});

export const fetchCurrencies = () => (dispatch) => {
  dispatch(actionRequestMoeda());
  return fetchMoeda()
    .then(
      (data) => {
        const filteredCoins = Object
          .keys(data)
          .filter((coin) => coin !== 'USDT');
        return dispatch(actionRequestCurrenciesSuccess(filteredCoins));
      },
      (error) => dispatch(actionRequestCurrenciesFail(error)),
    );
};

export const fetchExchangesRates = (userForm) => (dispatch) => {
  dispatch(actionRequestMoeda());
  return fetchMoeda()
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
      (error) => dispatch(actionRequestCurrenciesFail(error)),
    );
};
