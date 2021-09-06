export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL, payload: { email },
});

export const saveExpenses = (payload) => ({
  type: SAVE_EXPENSES,
  payload,
});

export const saveCurrencies = (currencies) => ({
  type: SAVE_CURRENCIES,
  payload: { currencies },
});

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
