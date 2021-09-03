export const GET_EMAIL = 'GET_EMAIL';
export const GET_EXPENSES = 'GET_EXPENSES';
export const GET_SECESS = 'GET_COIN';
export const GET_REJECT_API = 'GET_REJECT_API';

// FUNÇÕES NORMAIS
export const emailLogin = (email) => ({
  type: GET_EMAIL,
  email,
});

export const sucessRequest = (payload) => ({
  type: GET_SECESS,
  payload,
});

export const rejectApi = (erro) => ({
  type: GET_REJECT_API,
  erro,
});

export const expenses = (expense, data) => ({
  type: GET_EXPENSES,
  expense,
  data,
});

const ApiServise = () => {
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => (response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))));
};

export default ApiServise;

export const fetchMoedas = () => (dispatch) => {
  return ApiServise()
    .then((response) => {
      const result = Object.keys(response).filter((item) => item !== 'USDT');
      return dispatch(sucessRequest(result));
    }).catch((erro) => dispatch(rejectApi(erro)));
};

export const addApiExpenses = (expen) => ((dispatch) => {
  return ApiServise()
    .then((response) => dispatch(expenses(expen, response)))
    .catch((erro) => dispatch(rejectApi(erro)));
});

// TODO O MÉRITO DA QUESTÃO 8 PARA MATHEUS MACEDO -> VALEU BROW!
