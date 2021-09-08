export const SAVE_EMAIL = 'SAVE_EMAIL';
export const IS_FETCHING = 'IS_FETCHING';
export const UPDATE_CURRENCIES = 'UPDATE_CURRENCIES';
export const ERROR = 'ERROR';

export const saveEmailAction = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
});

export const getCurrencies = (payload) => ({
  type: UPDATE_CURRENCIES,
  payload,
});

export const isFetching = () => ({ type: IS_FETCHING });

export const errorHandler = (payload) => ({
  type: ERROR,
  payload,
});

export const fetchCurrencies = () => (
  async (dispatch) => {
    dispatch(isFetching());
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      if (!response.ok) throw new Error('Couldn\'t fetch data');
      const data = await response.json();
      delete data.USDT;
      dispatch(getCurrencies(data));
      dispatch(isFetching());
    } catch (error) {
      dispatch(errorHandler(error.message));
      dispatch(isFetching());
    }
  }
);
