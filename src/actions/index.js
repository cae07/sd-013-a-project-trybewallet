// Coloque aqui suas actions
export const USER_ACTION = 'USER_ACTION';
export const WALLET_ACTION = 'WALLET_ACTION';
export const WALLET_DESPESAS = 'WALLET_DESPESAS';

export const salvarStore = (payload) => ({
  type: USER_ACTION,
  payload,
});

export const sendWalletInfo = (payload) => ({
  type: WALLET_ACTION,
  payload,
});

export const actionDespesas = (payload) => ({
  type:WALLET_DESPESAS,
  payload,
});
const fetchApi= async () => {
  const MoedasApi = await fetch('https://economia.awesomeapi.com.br/json/all');
  const ApiJson = await MoedasApi.json();
  return ApiJson;
}

export const tankApi=(moedaState) => (dispatch) =>fetchApi().then((data) => {
  const moedasInfo = {
    ...moedaState,
    exchangeRates:{
      ...data
    }
  }
  dispatch(actionDespesas(moedasInfo))
})

