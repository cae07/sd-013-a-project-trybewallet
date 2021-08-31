export const FAZ_O_FETCH = 'FAZ_O_FETCH';
export const ERROR_FETCH = 'ERROR_FETCH';
export const SUCCESS_FETCH = 'SUCCESS_FETCH';
export const ENVIA_SPENCES = 'ENVIA_SPENCES';
export const SUCCESS_FETCH_EXPENSES = 'SUCCESS_FETCH_EXPENSES';

export const successFetchEspenses = (stat, payload) => ({
  type: SUCCESS_FETCH_EXPENSES,
  payload,
  stat,
});

export const successFetch = (payload) => ({
  type: SUCCESS_FETCH,
  payload,
});

export const fazOFetch = () => ({
  type: FAZ_O_FETCH,
});

export const errorFetch = () => ({
  type: ERROR_FETCH,
});

export const fetchName = () => async (dispatch) => {
  dispatch(fazOFetch());
  try {
    const res = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await res.json();
    return dispatch(successFetch(data));
  } catch (error) {
    return dispatch(errorFetch());
  }
};

export const enviaSpences = (payload) => ({
  type: ENVIA_SPENCES,
  payload,
});

export const fetchExpenses = (state) => async (dispatch) => {
  try {
    const res = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await res.json();
    return dispatch(successFetchEspenses(state, data));
  } catch (error) {
    return dispatch(errorFetch());
  }
};
