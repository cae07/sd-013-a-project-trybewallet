// Coloque aqui suas actions
export const LOADING_TYPE = 'LOADING_TYPE';
export const SUCCESS_TYPE = 'SUCCESS_TYPE';
export const ERROR_TYPE = 'ERROR_TYPE';


export const loadingAction = () => ({
  type: LOADING_TYPE
});

export const successAction = (payload) => ({
  type: SUCCESS_TYPE,
  payload,
});

export const errorAction = (payload) => ({
  type: ERROR_TYPE,
  payload,
});

export const fetchAPI = () => {
  return async (dispatch) => {
    dispatch(loadingAction());
    try {
      const res = await fetch('https://economia.awesomeapi.com.br/json/all');
      if(!res.ok) throw new Error('fetch failed'); // tem que usar sesmpre antes do json
      const data = await res.json();
      return dispatch(successAction(data))
    } catch (error) {
      return dispatch(errorAction(error.message))
    }
  };
}