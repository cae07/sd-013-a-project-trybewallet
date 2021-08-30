import {
  ADD_EXPENSE,
  LOGIN,
  SET_CURRENCIES_FAILURE,
  SET_CURRENCIES_SUCCESS,
  SET_LOADING,
} from './actionTypes';

export const login = (email) => ({
  type: LOGIN,
  email,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setCurrenciesSuccess = (payload) => ({
  type: SET_CURRENCIES_SUCCESS,
  payload,
});

export const setCurrenciesFailure = (payload) => ({
  type: SET_CURRENCIES_FAILURE,
  payload,
});

export const getCurrencies = () => async (dispatch) => {
  setLoading();

  try {
    const data = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await data.json();

    // console.log(response);
    // const mapResponse = Object.entries(response).map((currency) => currency[1]);
    // const responseWithoutUSDT = mapResponse
    //   .filter((currency) => currency.codein !== 'BRLT');

    return dispatch(setCurrenciesSuccess(response));
  } catch (error) {
    return dispatch(setCurrenciesFailure(error.message));
  }
};

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});
