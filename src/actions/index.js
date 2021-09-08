// Coloque aqui suas actions
export const USER_ACTION = 'USER_ACTION';
export const WALLET_FORM = 'WALLET_FORM';
export const REQUEST_API = 'REQUEST_API';
export const RECEIVE_API = 'RECEIVE_API';

export const actionUser = (payload) => ({
  type: USER_ACTION, payload });

export const walletForm = (payload) => ({
  type: WALLET_FORM, payload });

const request = () => ({
  type: REQUEST_API, status: 'Loading',
});

const receive = (payload) => ({
  type: RECEIVE_API, payload,
});

export function fetchAPI() {
  return async (dispatch) => {
    try {
      dispatch(request());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      dispatch(receive(data));
    } catch (error) {
      console.log(error);
    }
  };
}
