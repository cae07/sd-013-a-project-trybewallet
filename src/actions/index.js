export const SAVE_LOGIN = 'SAVE_LOGIN';
export const SAVE_DESPESA = 'SAVE_LOGIN';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';

export const setInfoLogin = (state) => (
  {
    type: SAVE_LOGIN,
    state,
  });

export const setExpense = (state) => (
  {
    type: SAVE_DESPESA,
    state,
  });

// action responsável pelo envio do json com as moedas após a requisição na api.
export const setCurrencies = (jsonCurrencies) => (
  {
    type: SAVE_CURRENCIES,
    jsonCurrencies, // jsonCurrencies é o valor recebido pelo dispatch realizado pela função getCurrencies, com o resultado do fetch, que é um json com as moedas.
  });

export function fetchApiCurrencies() {
  // este primeiro return com dispatch é necessário pois o thunk sempre retorna uma função.
  return (dispatch) => {
    // caso queira ADICIONAR alguma ação ANTES do resultado da api, chama a action ANTES, e faz a lógica no reducer para alterar alguma chave. Ex.: ADICIONAR componente loading na tela.
    // dispatch(novaAction1(true));

    // fecth da api com as informações das moedas.
    return fetch('https://economia.awesomeapi.com.br/json/all')
      // then (então) converte o retorno para json
      .then((response) => response.json())
      // envia o json para a action setCurrencies.
      .then((currencies) => dispatch(setCurrencies(currencies)));

    // caso queira RETIRAR alguma ação DEPOIS do resultado da api, chama a action DEPOIS, e faz a lógica no reducer para alterar alguma chave. Ex.: RETIRAR componente loading na tela.
    // dispatch(novaAction2(false));
  };
}
