// Coloque aqui suas actions
export const ENVIAR_EMAIL = 'ENVIAR_EMAIL';
export const WAITING_API = 'WAITING_API';
export const FINISH_FETCH = 'FINISH_FETCH';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';

export const saveExpenses = (expenseObj) => ({
  type: SAVE_EXPENSES,
  expenseObj,
});

export const userAction = (payload) => ({
  type: ENVIAR_EMAIL,
  user: payload,
});

export const finishAPI = (payload) => ({
  type: FINISH_FETCH,
  currencies: payload,
});

export const waitingAPI = () => ({ type: WAITING_API });

export function fetchAPI() {
  return (dispatch) => {
    dispatch(waitingAPI());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => dispatch(finishAPI(data)));
  };
}
