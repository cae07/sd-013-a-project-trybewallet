import { getCurrency } from '../service';

export const loginAction = (email) => ({
  type: 'LOGIN_ACTION',
  email,
  redirect: true,
});

export const saveExpensesAction = (expense, total) => async (dispatch) => {
  const exchangeRates = await getCurrency();

  if (exchangeRates) {
    dispatch({
      type: 'SAVE_EXPENSE',
      expense: {
        ...expense,
        exchangeRates,
      },
      total,
    });
  } else {
    dispatch({
      type: 'SAVE_EXPENSE_ERROR',
    });
  }
};
