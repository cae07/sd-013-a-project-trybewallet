import fetchApi from '../serviceApi/fetchApi';

// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const VALOR = 'VALOR';
export const EXPENSE = 'EXPENSE';
export const recordUser = (user) => ({ type: LOGIN, user });

export const moedas = (payload) => ({ type: VALOR, payload });
export const despesaUser = (payload) => ({ type: EXPENSE, payload });

export const allMoedas = () => (dispatch) => {
  fetchApi().then((data) => {
    delete data.USDT;
    dispatch(moedas(data));
  });
};
