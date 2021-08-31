export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SUCCESS_REQUEST = 'SUCCESS_REQUEST';
export const FAIL_REQUEST = 'FAIL_REQUEST';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';

export const saveUserEmail = (payload) => ({
  type: SAVE_EMAIL,
  payload,
});

export const getCurrenciesSuccess = (payload) => ({
  type: SUCCESS_REQUEST,
  payload,
});

export const getCurrenciesFail = () => ({
  type: FAIL_REQUEST,
});

//  Essa função abaixo teve como inspiração a função da ultima aula que tivemos sobre thunk

export const getCurrencies = () => (dispatch) => {
  const tryFetch = fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => (
      response.json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ));
  tryFetch
    .then((response) => delete response.USDT);
  return tryFetch
    .then((rsp2) => dispatch(getCurrenciesSuccess(rsp2)),
      () => dispatch(getCurrenciesFail));
};

export const saveNewExpense = (payload) => ({
  type: SAVE_EXPENSE,
  payload,
});
