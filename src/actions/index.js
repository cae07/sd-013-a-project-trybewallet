// Requisitos 7 e 8 - 2º Passo - importar as actionsType
import { ADD_EXPENSES, GET_CURRENCIES, REQUEST_CURRENCIES, SAVE_EMAIL } from './actionsType';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

// Requisito 7 - 3º Passo - Configurar as actions
export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const getCurrencies = (json) => ({
  type: GET_CURRENCIES,
  json,
});

// Requisito 8 - 3º Passo - configurar a action
export const addExpenses = () => ({
  type: ADD_EXPENSES,
});

// Requisito 7 - 4º Passo - Fazer a requisição à API
export function fetchCurrencies() {
  return async (dispatch) => {
    dispatch(requestCurrencies());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    return dispatch(getCurrencies(json));
  };
}

// Continuação do Requisito 7 e 8 'src/reducers/wallet.js'
