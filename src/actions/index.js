import { GET_EMAIL, GET_API, GET_DESPENSES } from './actionTypes';

const apiDeMoedas = 'https://economia.awesomeapi.com.br/json/all';

export const actionGetEmail = (state) => ({ type: GET_EMAIL, state });
export const actionGetAPI = (payload) => ({ type: GET_API, payload });
export const actionFetchApi = () => (
  async (dispatch) => {
    try {
      const response = await fetch(apiDeMoedas);
      const dados = await response.json();
      delete dados.USDT;
      delete dados.DOGE;
      return dispatch(actionGetAPI(dados));
    } catch (error) {
      console.log(error);
    }
  });
export const actionGetDespenses = (state) => ({ type: GET_DESPENSES, state });
