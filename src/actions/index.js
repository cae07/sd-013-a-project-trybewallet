import {
  LOGIN,
  SAVE_STATE_EXPENSES,
  FETCH_API_THUNK_EXCHANGE_RATES,
  FETCH_API_THUNK_HAS_STARTED,
  FETCH_API_THUNK_HAS_FINISHED,
  FETCH_API_THUNK_HAS_ERROR,
} from './actionTypes';

import fetchAPI from '../services/index';

export const loginAction = (payload) => ({
  type: LOGIN,
  payload,
});

export const saveExpensesAction = (payload) => ({
  type: SAVE_STATE_EXPENSES,
  payload,
});

export const fetchApiThunkAction = (payload) => ({
  type: FETCH_API_THUNK_EXCHANGE_RATES,
  payload,
});

export const fetchApiThunkStart = () => ({
  type: FETCH_API_THUNK_HAS_STARTED,
});

export const fetchApiThunkFinished = () => ({
  type: FETCH_API_THUNK_HAS_FINISHED,
});

export const fetchApiThunkError = (payload) => ({
  type: FETCH_API_THUNK_HAS_ERROR,
  payload,
});
export const fetchApiThunk = (walletState) => async (dispatch) => {
  try {
    const URL = 'https://economia.awesomeapi.com.br/json/all';

    dispatch(fetchApiThunkStart());
    const response = await fetchAPI(URL);
    const payload = { exchangeRates: await response };
    dispatch(fetchApiThunkFinished());

    // console.log('L39', payload);
    console.log('L40', walletState);

    dispatch(fetchApiThunkAction(payload));

    const newExpense = { expenses: { ...walletState, ...payload } };
    console.log('L43', newExpense);
    dispatch(saveExpensesAction(newExpense));
  } catch (error) {
    dispatch(fetchApiThunkError(error));
  }
};
// THUNK MIDDLEWARE
// É uma função que retorna uma função
//   ()     =>   () => {}
// função() =>  função()
