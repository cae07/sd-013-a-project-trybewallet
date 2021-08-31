export const FAZ_O_FETCH = 'FAZ_O_FETCH';
export const ERROR_FETCH = 'ERROR_FETCH';
export const SUCCESS_FETCH = 'SUCCESS_FETCH';

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
