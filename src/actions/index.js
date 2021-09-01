import fetchApi from '../serviceApi/fetchApi';

// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const VALOR = 'VALOR';

export const recordUser = (user) => ({ type: LOGIN, user });

export const moedas = (payload) => ({ type: VALOR, payload });

export const allMoedas = () => (dispatch) => {
  console.log('oi');
  fetchApi().then((data) => {
    console.log(data);
    dispatch(moedas(data));
  });
};
