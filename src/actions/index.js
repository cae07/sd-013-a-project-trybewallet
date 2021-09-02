export const SAVE_EMAIL = 'SAVE_EMAIL';
export const CAMBIO_CHANGE = 'CAMBIO_CHANGE';
export const SAVED_VALUES = 'SAVED_VALUES';
export const CONVERT_VALUE = 'CONVERT_VALUE';

export const saveEmail = (email) => ({ type: SAVE_EMAIL, payload: email });

export const cambioChanges = (wallet) => ({ type: CAMBIO_CHANGE, payload: wallet });

export const valueConvert = (payload) => ({ type: CONVERT_VALUE, payload });

export const valueCambio = () => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((response) => response.json()
    .then((data) => {
      delete data.USDT;
      dispatch(cambioChanges(data));
    }));

export const convertValue = (valueTotal) => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((response) => response.json()
    .then((data) => {
      const valueData = {
        ...valueTotal,
        exchangeRates: data };
      return dispatch(valueConvert(valueData));
    }));
