export const INPUT_EMAIL = 'INPUT_EMAIL';
export const INPUT_PASSWORD = 'INPUT_PASSWORD';
// // export const LOADING_TYPE = 'LOADING_TYPE';
// // export const SUCCESS_TYPE = 'SUCCESS_TYPE';
// // export const ERROR_TYPE = 'ERROR_TYPE';

export const inputEmail = (payload) => ({
  type: INPUT_EMAIL,
  payload });

export const inputPassword = (payload) => ({
  type: INPUT_PASSWORD,
  payload });

// // export const isLoadingAction = () => ({
// //   type: LOADING_TYPE,
// // });

// // export const successAction = (payload) => ({
// //   type: SUCCESS_TYPE,
// //   payload,
// // });

// // export const errorAction = (payload) => ({
// //   type: ERROR_TYPE,
// //   payload,
// // });

// // export const fetchApi = () => async (dispatch) => {
// //   dispatch(isLoadingAction());
// //   try {
// //     const api = await fetch('https://economia.awesomeapi.com.br/json/all');
// //     // Usar if sempre antes do Json: Ajuda de Julia Baptista
// //     if (!api.ok) throw new Error('Fetch com erro'); // Mensagem de erro
// //     const json = await api.json();
// //     return dispatch(successAction(json));
// //   } catch (error) {
// //     return dispatch(errorAction(error.message));
// //   }
// // };
