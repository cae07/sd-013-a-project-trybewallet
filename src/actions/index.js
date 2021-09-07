// Coloque aqui suas actions
export const EMAIL_VALID = 'EMAIL_VALID';
export const GET_CURRENCY = 'GET_CURRENCY';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const FAILED_CURRENCY = 'FAILED_CURRENCY';

export const emailValid = (email) => ({
  type: EMAIL_VALID,
  email,
});

function getCurrency(json) {
  return { type: GET_CURRENCY, payload: json };
}

function requestCurrency() {
  return { type: REQUEST_CURRENCY };
}

function failedCurrency(error) {
  return { type: FAILED_CURRENCY, payload: error };
}

export function fetchCurrency() {
  return (dispatch) => {
    dispatch(requestCurrency());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((r) => r.json()
        .then(
          (json) => dispatch(getCurrency(json)),
          (error) => dispatch(failedCurrency(error)),
        ));
  };
}
