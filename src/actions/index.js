import { ApiCoin }  from "../service/ApiCoin";
// Coloque aqui suas actions

export const INPUT_EMAIL = 'INPUT_EMAIL';
export const INPUT_SENHA = 'INPUT_SENHA';

export const inputEmail = (payload) => ({
  type: INPUT_EMAIL,
  payload });

export const inputPassword = (payload) => ({
  type: INPUT_SENHA,
  payload });

export const LOADING_TYPE = 'LOADING_TYPE';
export const SUCCESS_TYPE = 'SUCCESS_TYPE';
export const ERROR_TYPE = 'ERROR_TYPE';

export const isLoadingAction = () => ({
  type: LOADING_TYPE,
});

export const successAction = (payload) => ({
  type: SUCCESS_TYPE,
  payload,
});

export const errorAction = () => ({
  type: ERROR_TYPE,
});

export const fetchApiThunk = () => (dispatch) => {
  dispatch(isLoadingAction());

  return ApiCoin()
    .then(
      (response) => dispatch(successAction(response)),
      () => dispatch(errorAction()),
    );
};