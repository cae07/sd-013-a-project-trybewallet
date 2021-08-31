import fetchAPI from '../services/api';

// Coloque aqui suas actions
export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESSFUL = 'REQUEST_API_SUCCESSFUL';
export const REQUEST_API_FAILED = 'REQUEST_API_FAILED';

export const saveUserInfo = (payload) => ({
  type: SAVE_USER_INFO,
  payload,
});

export const requestAPI = () => ({
  type: REQUEST_API,
});

export const requestAPISuccessful = (payload) => ({
  type: REQUEST_API_SUCCESSFUL,
  payload,
});

export const requestAPIFailed = () => ({
  type: REQUEST_API_FAILED,
});

export function getCurrencies() {
  return async (dispatch) => {
    dispatch(requestAPI()); // faz a requisição da api e muda o loadin pra true
    try {
      const data = await fetchAPI();
      const currencies = data.map(([name]) => name);

      dispatch(requestAPISuccessful(currencies));
    } catch (error) {
      dispatch(requestAPIFailed());
    }
  };
}
