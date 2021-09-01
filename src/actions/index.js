// Coloque aqui suas actions
export const API_SUCESS_RETURN = 'API_SUCESS_RETURN';
export const SAVE_EMAIL = 'SAVE_EMAIL';

export const saveEmail = (payload) => (
  { type: SAVE_EMAIL, payload }
);

export const APISucessReturn = (payload) => (
  { type: API_SUCESS_RETURN, payload }
);

export const currencyAPIThunk = () => async (dispatch) => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(url);
  const responseJSON = await response.json();
  const jsonToArray = Object.values(responseJSON);
  const withoutBRLT = jsonToArray.filter((item) => item.codein !== 'BRLT');
  dispatch(APISucessReturn(withoutBRLT));
};
