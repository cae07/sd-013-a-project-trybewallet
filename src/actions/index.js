export const LOGIN = 'LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const SUCCESFUL_RESPONSE = 'SUCCESFUL_RESPONSE';
export const FAILED_RESPONSE = 'FAILED_RESPONSE';

const setLogin = (email, password) => ({
  type: LOGIN, email, password,
});

export default setLogin;

export const requestAPI = () => ({
  type: REQUEST_API, loading: true,
});

export const getCurrencies = (payload) => ({
  type: SUCCESFUL_RESPONSE, loading: false, payload,
});

export const failedAPI = (msg) => ({
  type: FAILED_RESPONSE, loading: false, msg,
});

export const thunkCurrencies = () => async (dispatch) => {
  try {
    dispatch(requestAPI());
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await request.json();
    dispatch(getCurrencies(response));
  } catch (error) {
    dispatch(failedAPI(error));
  }
};
