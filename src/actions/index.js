export const SAVE_EMAIL = 'SAVE_EMAIL';
// export const SUCCESS_TYPE = 'SUCCESS_TYPE';
// export const ERROR_TYPE = 'ERROR_TYPE';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL, payload: { email },
});

// export const successAction = (payload) => ({
//   type: SUCCESS_TYPE,
//   payload,
// });

// export const errorAction = (payload) => ({
//   type: ERROR_TYPE,
//   payload,
// });

// export const fetchApi = () => {
//   return async (dispatch) => {
//     dispatch(isLoadingAction());
//     try {
//       const api = await fetch('https://economia.awesomeapi.com.br/json/all');
//       if (!api.ok) throw new Error('fetch com erro'); // usar sempre antes do json
//       const json = await api.json();
//       return dispatch(successAction(json));
//     } catch (error) {
//       return dispatch(errorAction(error.mensage));
//     }
//   };
// };
