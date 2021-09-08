export const EMAIL = 'EMAIL';
export const PASSWORD = 'PASSWORD';
export const LOADING_TYPE = 'LOADING_TYPE';
export const SUCCESS_TYPE = 'SUCCESS_TYPE';
export const ERROR_TYPE = 'ERROR_TYPE';
const URL = 'https://economia.awesomeapi.com.br/json/all';

export const Email = (payload) => ({
  type: EMAIL,
  payload });

export const Password = (payload) => ({
  type: PASSWORD,
  payload });

export const isLoadingAction = () => ({
  type: LOADING_TYPE,
});

export const successAction = (payload) => ({
  type: SUCCESS_TYPE,
  payload,
});

export const errorAction = () => ({
  type: ERROR_TYPE,
});

export const getCurrencyAPI = () => (
  fetch(URL)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export const fetchAPI = () => (dispatch) => {
  dispatch(isLoadingAction());

  return getCurrencyAPI()
    .then(
      (response) => dispatch(successAction(response)),
      () => dispatch(errorAction()),
    );
};
