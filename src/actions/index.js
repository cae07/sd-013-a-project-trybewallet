import getApi from '../services/api';

export const ADD_CONTACT = 'ADD_CONTACT';
export const UPDATE_CURRENCIES = 'UPDATE_CURRENCIES';

export const actionAdd = (payload) => ({
  type: ADD_CONTACT,
  payload,
});

export const getCurrencies = (payload) => ({
  type: UPDATE_CURRENCIES,
  payload,
});

export const fetchCurrencies = () => (
  async (dispatch) => {
    try {
      const api = await getApi();
      const currencies = Object.keys(api).filter((key) => key !== 'USDT');
      return dispatch(getCurrencies(currencies));
    } catch (error) {
      return console.log(error.message);
    }
  }
);
