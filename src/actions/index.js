import fetchMoeda from '../services/APIMoeda';

export const LOGIN_EMAIL = 'LOGIN_EMAIL';
export const WALLET_DATA = 'WALLET_DATA';
export const ACTION_REQUEST_START = 'ACTION_REQUEST_START';
export const ACTION_REQUEST_SUCCESS = 'ACTION_REQUEST_SUCCESS';
export const ACTION_REQUEST_FAIL = 'ACTION_REQUEST_FAIL';

export const loginEmail = (payload) => ({
  type: LOGIN_EMAIL,
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

// Função fetchCurrencies para conexão com a API de Moedas, passando a dispatch como parametro
export const fetchCurrencies = () => async (dispatch) => {
  try {
    // Dispara a action de tentativa de conexão com a API de Moedas
    dispatch(actionRequestMoeda());
    // Guarda na variável currencies os dados de retorno da API
    const currencies = await fetchMoeda();
    // Se chegou até esse ponto aciono a action de Success de conexão com a API
    dispatch(actionRequestCurrenciesSuccess(currencies));
  } catch (error) {
    // Se chegou nesse ponto de erro, aciono a action de Error de conexão com a API
    dispatch(actionRequestCurrenciesFail(error));
  }
};
// Coloque aqui suas actions
