// Coloque aqui suas actions
import {
  REGISTER_USER,
  UPDATE_EXPENSES,
  LOADING_ACTION,
  LOADING_ACTION_SUCCESS,
  LOADING_ACTION_FAIL,
  EDIT_EXPENSE,
  DELETE_EXPENSE,
  IS_EDITING,
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

export const editExpense = (expense) => ({
  type: EDIT_EXPENSE,
  expense,
});

export const deleteExpense = (payload, id) => ({
  type: DELETE_EXPENSE,
  payload,
  id,
});

export const isEditing = () => ({
  type: IS_EDITING,
});

export const fetchData = () => (
  async (dispatch) => {
    dispatch(loadingAction());

    try {
      const res = await fetch(API_URL);

      const data = await res.json();

      delete data.USDT;
      dispatch(loadingActionSuccess(data));
      return data;
    } catch (error) {
      return dispatch(loadingActionFail(error.message));
    }
  }
);
