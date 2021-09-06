import getRateAPI from '../services/awesomeapi';

export const ACTION_LOGIN = 'ACTION_LOGIN';
export const ACTION_LOADING = 'ACTION_LOADING';
export const ACTION_SUCESS = 'ACTION_SUCESS';
export const ACTION_ERROR = 'ACTION_ERROR';
export const ACTION_ADD_EXPENSE = 'ACTION_ADD_EXPENSE';

export const setLogin = (email) => ({
  type: ACTION_LOGIN,
  email,
});

export const loading = () => ({
  type: ACTION_LOADING,
});

export const sucess = (payload) => ({
  type: ACTION_SUCESS,
  payload,
});

export const error = () => ({
  type: ACTION_ERROR,
});

export const getApiThunk = () => (dispatch) => {
  dispatch(loading());

  return getRateAPI()
    .then(
      (response) => dispatch(sucess(response)),
      () => dispatch(error()),
    );
};

export const addExpense = (payload) => ({
  type: ACTION_ADD_EXPENSE,
  payload,
});

export const addExpenseWithFetch = (expences) => (dispatch) => {
  dispatch(loading());

  return getRateAPI()
    .then(
      (response) => {
        const estadoLocal = {
          ...expences,
          exchangeRates: {
            ...response,
          },
        };
        return dispatch(addExpense(estadoLocal));
      },
    );
};
