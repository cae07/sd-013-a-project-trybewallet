// Coloque aqui suas actions
export const SET_EMAIL = 'SET_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const setEmail = (payload) => ({
  type: SET_EMAIL,
  ...payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  ...payload,
});
