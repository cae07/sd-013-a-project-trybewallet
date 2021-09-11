// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const SAVE_EXCHANGE_RATES = 'SAVE_EXCHANGE_RATES';
export const SAVE_ID = 'SAVE_ID';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const saveEmail = (payload) => ({
  type: SAVE_EMAIL,
  payload,
});

export const saveExpense = (payload) => ({
  type: SAVE_EXPENSE,
  payload,
});

export const saveExpenseThunk = (payload) => async (dispatch) => {
  const fetchAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
  const exchangeRates = await fetchAPI.json();
  delete exchangeRates.USDT;
  const rates = { expense: { exchangeRates } };
  Object.assign(payload.expense, rates.expense);
  return dispatch(saveExpense(payload));
};

export const saveId = (payload) => ({
  type: SAVE_ID,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});
