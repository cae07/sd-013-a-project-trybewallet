export const SAVE_EMAIL = 'SAVE_EMAIL';
export const REQUEST_API = 'REQUEST_API';
export const EXPENSE_API = 'EXPENSE_API';

export const saveEmail = (email) => ({ type: SAVE_EMAIL, email });
export const requestAPI = () => ({ type: REQUEST_API });
export const receiveExpenseAndApi = (expense, data) => ({
  type: EXPENSE_API,
  expense,
  data,
});

export function requestExpenseAndApi(expense) {
  return async (dispatch) => {
    try {
      dispatch(requestAPI());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      dispatch(receiveExpenseAndApi(expense, data));
    } catch (error) {
      console.log(error);
    }
  };
}
