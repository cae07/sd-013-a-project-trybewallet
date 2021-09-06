// Coloque aqui suas actions
export const LOADING_TYPE = 'LOADING_TYPE';
export const SUCCESS_TYPE = 'SUCCESS_TYPE';
export const ERROR_TYPE = 'ERROR_TYPE';

export const isLoadingAction = () => ({
  type: LOADING_TYPE,
});

export const successAction = (payload) => ({
  type: SUCCESS_TYPE,
  payload,
});

export const errorAction = (payload) => ({
  type: ERROR_TYPE,
  payload,
});

export const fetchApi = () => {
  return async (dispatch) => {
    dispatch(isLoadinAction());
    try {
      const api = await fetch('https://economia.awesomeapi.com.br/json/all');
      const json = await api.json();
      return dispatch(successAction(json));
    } catch (error) {
      return dispatch(errorAction(error.message));
    }
  };
};