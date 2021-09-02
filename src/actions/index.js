// Coloque aqui suas actions
import {
  REGISTER_USER,
  UPDATE_EXPENSES,
  LOADING_ACTION,
  LOADING_ACTION_SUCCESS,
  LOADING_ACTION_FAIL,
  API_URL,
} from '../constants';

export const registerUser = (user) => ({
  type: REGISTER_USER,
  payload: user,
});

export const updateExpenses = (expense) => ({
  type: UPDATE_EXPENSES,
  payload: expense,
});

export const loadingAction = () => ({
  type: LOADING_ACTION,
});

export const loadingActionSuccess = (payload) => ({
  type: LOADING_ACTION_SUCCESS,
  payload,
});

export const loadingActionFail = (payload) => ({
  type: LOADING_ACTION_FAIL,
  payload,
});

export const fetchData = () => (
  async (dispatch) => {
    dispatch(loadingAction());

    try {
      const res = await fetch(API_URL);

      const data = await res.json();

      delete data.USDT;
      return dispatch(loadingActionSuccess(data));
    } catch (error) {
      return dispatch(loadingActionFail(error.message));
    }
  }
);
