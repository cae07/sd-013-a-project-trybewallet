const SAVE_EMAIL = 'SAVE_EMAIL';
export const CAMBIO_CHANGE = 'CAMBIO_CHANGE';

export const saveEmail = (email) => ({ type: SAVE_EMAIL, payload: email });

export const cambioChanges = (wallet) => ({ type: CAMBIO_CHANGE, payload: wallet });

export const valueCambio = () => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((response) => response.json()
    .then((data) => {
      delete data.USDT;
      dispatch(cambioChanges(data));
    }));

export default SAVE_EMAIL;
