// Coloque aqui suas actions
export const SET_LOGIN = 'SET_LOGIN';
export const INSERT_EXPENSES = 'INSERT_EXPENSES';

export const setLogin = (payload) => ({
  type: SET_LOGIN, payload,
});

export const insertExpenses = (payload) => ({
  type: INSERT_EXPENSES, payload,
});
