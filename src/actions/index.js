// Coloque aqui suas actions
import fetchApi from '../service';

export const EMAIL = 'EMAIL';
// export const WALLET = 'WALLET';

export const emailAction = (payload) => ({ type: EMAIL, payload });

// export const walletAction = (payload) => ({ type: WALLET, payload });
// api actions

export const REQUEST_API = 'REQUEST_API';
export const API_SUCESS = 'API_SUCESS';
export const API_FAIL = 'API_FAIL';

export const requestApi = () => ({
  type: REQUEST_API,
});

export const apiFail = (erromsg) => ({
  type: API_FAIL,
  erromsg,
});

export const apiSucess = (payload) => ({
  type: API_SUCESS,
  payload,
});

export const fetchMoedas = () => async (dispatch) => {
  dispatch(requestApi());
  try {
    const moedas = await fetchApi();
    const filtrarMoedas = Object.keys(moedas)
      .filter((coin) => coin !== 'USDT');
    dispatch(apiSucess(filtrarMoedas));
  } catch ({ message }) {
    dispatch(apiFail(message));
  }
};
