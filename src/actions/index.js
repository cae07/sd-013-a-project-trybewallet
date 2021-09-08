export const REQUEST_MOEDAAPI = 'REQUEST_MOEDAAPI';
export const requestMoedaApi = () => ({ type: REQUEST_MOEDAAPI });

export const ERROR_REQUEST_MOEDA = 'ERROR_REQUEST_MOEDA';
export const errorRequestMoeda = (error) => ({
  type: ERROR_REQUEST_MOEDA,
  payload: error,
});

export const GET_MOEDA = 'GET_MOEDA';
export const getMoeda = (json) => ({
  type: GET_MOEDA,
  payload: json,
});

export const USER_EMAIL = 'USER_EMAIL';
export const userEmail = (payload) => ({
  type: USER_EMAIL,
  email: payload.email,
});

export function fetchMoeda() {
  return (dispatch) => {
    dispatch(requestMoedaApi());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json()
        .then(
          (json) => dispatch(getMoeda(json)),
          (error) => dispatch(errorRequestMoeda(error)),
        ));
  };
}

export const ADD_EXPENSE = 'ADD_EXPENSE';
function newExpense(expense) {
  return {
    type: ADD_EXPENSE,
    payload: expense,
  };
}

export function addExpense(expense) {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((json) => {
        const completeExpense = {
          ...expense,
          exchangeRates: json,
        };
        dispatch(newExpense(completeExpense));
      });
  };
}

// Requisito 8 o amigo Vinicius Dyonisio me salvou, esta ajudando muito na adaptacao do redux
