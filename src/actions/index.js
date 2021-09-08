// Coloque aqui suas actions
export const ACTION_EMAIL = 'ACTION_EMAIL';
export const ACTION_API_SUCCESS = 'ACTION_API_SUCCESS';
export const ACTION_API_REJECT = 'ACTION_API_REJECT';
export const ACTION_GET_EXPENSES = 'ACTION_GET_EXPENSES';

export const saveEmail = (email) => ({
  type: ACTION_EMAIL,
  email,
});

export const actionSucess = (payload) => ({
  type: ACTION_API_SUCCESS,
  payload,
});

export const actionReject = (error) => ({
  type: ACTION_API_REJECT,
  error,
});

export const actionGetExpenses = (expenses, data) => ({
  type: ACTION_GET_EXPENSES,
  expenses,
  data,
});

export const fetchApi = () => {
  const linkApi = fetch('https://economia.awesomeapi.com.br/json/all')
    .then((resp) => resp.json()
      .then((data) => (resp.ok ? Promise.resolve(data) : Promise.reject(data))));
  return linkApi;
};

export const fetchMoedas = () => (dispatch) => {
  const requisicao = fetchApi()
    .then((response) => {
      const result = Object.keys(response).filter((item) => item !== 'USDT');
      return dispatch(actionSucess(result));
    })
    .catch((erro) => dispatch(actionReject(erro)));
  return requisicao;
};

export const fetchExpenses = (exp) => ((dispatch) => {
  const requisicao2 = fetchApi()
    .then((resp) => dispatch(actionGetExpenses(exp, resp)))
    .catch((error) => dispatch(actionReject(error)));
  return requisicao2;
});
