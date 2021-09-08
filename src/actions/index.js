export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const SUCCESS_ACTION = 'SUCCESS_ACTION';
export const ERROR_ACTION = 'ERROR_ACTION';
export const IS_LOADING_ACTION = 'IS_LOADING_ACTION';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL, payload: { email },
});

export const saveExpense = (expense) => ({
  type: SAVE_EXPENSE,
  payload: { expense },
});

export const saveCurrencies = (currencies) => ({
  type: SAVE_CURRENCIES,
  payload: { currencies },
});

export const successAction = (exchangeRates) => ({
  type: SUCCESS_ACTION,
  payload: { exchangeRates },
});

export const errorAction = (error) => ({
  type: ERROR_ACTION,
  payload: { error },
});

export const isLoadingAction = () => ({
  type: IS_LOADING_ACTION,
});

export const fetchCurrenciesThunk = () => async (dispatch) => {
  dispatch(isLoadingAction());
  try {
    const api = await fetch('https://economia.awesomeapi.com.br/json/all');
    if (!api.ok) throw new Error('fetch com erro'); // usar sempre antes do json
    const json = await api.json();
    return dispatch(successAction(json));
  } catch (error) {
    return dispatch(errorAction(error.mensage));
  }
};
