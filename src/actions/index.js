export const userAct = (payload) => ({
  type: 'USER_ACT', payload,
});
export const formAct = (payload) => ({
  type: 'FORM_ACT', payload,
});
const requestApi = () => ({
  type: 'REQUEST_MOEDAS', status: 'Loading',
});
const receiveApi = (payload) => ({
  type: 'RECEIVE_MOEDAS', payload,
});
const requestError = () => ({
  type: 'REQUEST_ERROR', status: 'Fail',
});
export function fetchAPI() {
  return async (dispatch) => {
    try {
      dispatch(requestApi());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const moedas = await response.json();
      return dispatch(receiveApi(moedas));
    } catch (error) {
      return dispatch(requestError());
    }
  };
}
