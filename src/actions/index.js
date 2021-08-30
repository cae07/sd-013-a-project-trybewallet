export const GET_EMAIL = 'GET_EMAIL';
export const IS_FETCHING = 'IS_FETCHING';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';
export const SAVE_EXPENSES_SUCCESS = 'SAVE_EXPENSES_SUCCESS';
export const DISPATCH_DETELE_ROW = 'DISPATCH_DETELE_ROW';
export const DISPATCH_EDIT_LIST = 'DISPATCH_EDIT_LIST';

export const getEmail = (payload) => ({ type: GET_EMAIL, email: payload });

// =======================================================================
// Para fazer a requisição inicial e pegar os tipos de moeda
export const isLoadingAPI = () => ({ type: IS_FETCHING });
export const requestSuccess = (json, keys) => ({ type: REQUEST_SUCCESS, json, keys });
export const requestFail = (error) => ({ type: REQUEST_FAIL, fail: error });

const requestFetchAPI = async (url) => {
  const request = await fetch(url);
  const json = await request.json();
  return json;
};

export const requestAPI = () => (dispatch) => {
  return requestFetchAPI('https://economia.awesomeapi.com.br/json/all')
    .then(
      (json) => {
        delete json.USDT;
        const keys = Object.keys(json);
        dispatch(requestSuccess(json, keys));
      },
      (error) => dispatch(requestFail(error)),
    );
};
// =======================================================================

// =======================================================================
// Para salvar o valor das moedas atualizadas
export const saveExpensesSuccess = (payload) => ({ type: SAVE_EXPENSES_SUCCESS, payload });

export const saveExpenses = (payload) => (dispatch) => {
  dispatch(isLoadingAPI());
  return requestFetchAPI('https://economia.awesomeapi.com.br/json/all')
    .then(
      (json) => {
        // Dica que eu vi no PR do DAVID GONZAGA Turma 12
        // Fazer uma action que se encarrega de levar o state e também a requisição
        // ao invés de separar em duas...
        dispatch(saveExpensesSuccess({ ...payload, exchangeRates: json }));
      },
      (error) => dispatch(requestFail(error)),
    );
};
// =======================================================================

export const dispatchDeleteRow = (id, multiplyValue) => ({
  type: DISPATCH_DETELE_ROW, id, multiplyValue,
});
export const dispatchEditList = (id) => ({ type: DISPATCH_EDIT_LIST, id });
