export const GET_EMAIL = 'GET_EMAIL';
export const GET_MOEDA_API = 'GET_MOEDA_API';

export const formEmail = (email) => ({
  type: GET_EMAIL,
  email,
});

const apiMoeda = (json) => ({
  type: GET_MOEDA_API,
  json,
});

export function fetchApiDolar() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();

    dispatch(apiMoeda(Object.keys(data).filter((element) => element !== 'USDT')));
  };
}
