// Importação da função de fetch na API
import { getCoinAPI } from '../services/coinAPI';

// Página de Login
export const INPUT_EMAIL = 'INPUT_EMAIL';
export const INPUT_PASSWORD = 'INPUT_PASSWORD';

// Página da Carteira
export const LOADING_TYPE = 'LOADING_TYPE';
export const SUCCESS_TYPE = 'SUCCESS_TYPE';
export const ERROR_TYPE = 'ERROR_TYPE';

// Página de Login
export const inputEmail = (payload) => ({
  type: INPUT_EMAIL,
  payload });

export const inputPassword = (payload) => ({
  type: INPUT_PASSWORD,
  payload });

// Página da Carteira
export const isLoadingAction = () => ({
  type: LOADING_TYPE,
});

export const successAction = (payload) => ({
  type: SUCCESS_TYPE,
  payload,
});

export const errorAction = () => ({
  type: ERROR_TYPE,
});

// Chamada da API
// export const fetchApi = () => async (dispatch) => {
//   dispatch(isLoadingAction());
//   try {
//     const api = await fetch('https://economia.awesomeapi.com.br/json/all');
//     // Usar if sempre antes do Json: Ajuda de Julia Baptista
//     // if (!api.ok) throw new Error('Fetch com erro'); // Mensagem de erro
//     const json = await api.json();
//     return dispatch(successAction(json));
//   } catch (error) {
//     return dispatch(errorAction());
//   }
// };

// Fazendo o fetch com a ajuda da aula 16.4 da T13A
export const fetchApiWithThunk = () => (dispatch) => {
  dispatch(isLoadingAction());

  return getCoinAPI()
    .then(
      (response) => dispatch(successAction(response)),
      () => dispatch(errorAction()),
    );
};
