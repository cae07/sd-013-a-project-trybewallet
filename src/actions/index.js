// Requisito 7 - 2º Passo - importar as actionsType
import { SAVE_EMAIL, REQUEST_CURRENCIES, GET_CURRENCIES } from './actionsType';

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

// Requisito 7 - 4º Passo - Fazer a requisição à API
export function fetchCurrencies() {
  return async (dispatch) => {
    dispatch(requestCurrencies());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    return dispatch(getCurrencies(json));
  };
}

// Continuação do Requisito 7 'src/reducers/wallet.js'
