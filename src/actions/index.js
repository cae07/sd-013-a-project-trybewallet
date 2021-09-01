export const SAVE_LOGIN = 'SAVE_LOGIN';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';

export const saveLogin = (state) => (
  {
    type: SAVE_LOGIN,
    state,
  });

export const saveExpense = (expense) => (
  {
    type: SAVE_EXPENSE,
    expense,
  });

// action responsável pelo envio do json com as moedas após a requisição na api.
export const saveCurrencies = (jsonCurrencies) => (
  {
    type: SAVE_CURRENCIES,
    jsonCurrencies, // jsonCurrencies é o valor recebido pelo dispatch realizado pela função getCurrencies, com o resultado do fetch, que é um json com as moedas.
  });

export function fetchApiCurrencies() { // este é o thunk
  // este primeiro return com dispatch é necessário pois o thunk sempre retorna uma função.
  // caso queira ADICIONAR alguma ação ANTES do resultado da api, chama a action ANTES, e faz a lógica no reducer para alterar alguma chave. Ex.: ADICIONAR componente loading na tela.
  // dispatch(novaAction1(true));

  // depois, fecth da api com as informações das moedas.
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    // then (então) converte o retorno para json
    .then((response) => response.json())
    // envia o json para a action setCurrencies.
    .then((currencies) => dispatch(saveCurrencies(currencies)));

  // caso queira RETIRAR alguma ação DEPOIS do resultado da api, chama a action DEPOIS, e faz a lógica no reducer para alterar alguma chave. Ex.: RETIRAR componente loading na tela.
  // dispatch(novaAction2(false));
}
