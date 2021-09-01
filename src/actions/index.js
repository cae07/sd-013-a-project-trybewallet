// Coloque aqui suas actions
export const LOADING_TYPE = 'LOADING_TYPE';
export const CURRENCY_TYPE = 'SUCCESS_TYPE';
export const ERROR_TYPE = 'ERROR_TYPE';
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

export const loadingAction = () => ({
  type: LOADING_TYPE,
});

export const getCurrency = (payload) => ({
  type: CURRENCY_TYPE,
  payload,
});

export const errorAction = (payload) => ({
  type: ERROR_TYPE,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const fetchAPI = () => async (dispatch) => {
  // dispatch(loadingAction());
  try {
    const res = await fetch('https://economia.awesomeapi.com.br/json/all');
    if (!res.ok) throw new Error('Fetch failed');
    const data = await res.json();
    const cureenciesKeys = Object.keys(data);
    const filterdCurrencies = cureenciesKeys.filter((currencie) => currencie !== 'USDT');
    return dispatch(getCurrency(filterdCurrencies));
  } catch (error) {
    return dispatch(errorAction(error.message));
  }
};

export const addAPIExpense = (payload) => async (dispatch) => {
  // dispatch(loadingAction());
  try {
    const res = await fetch('https://economia.awesomeapi.com.br/json/all');
    if (!res.ok) throw new Error('Fetch failed');
    const data = await res.json();
    delete data.UST;
    const expense = { ...payload, exchangeRates: data };
    return dispatch(addExpense(expense));
  } catch (error) {
    return dispatch(errorAction(error.message));
  }
};

// Ideia pega do repositório do Gabriel gaspar
// How do I remove a property from a JavaScript object?
// https://stackoverflow.com/questions/208105/how-do-i-remove-a-property-from-a-javascript-object
