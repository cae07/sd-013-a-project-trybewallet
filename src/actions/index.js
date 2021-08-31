// Coloque aqui suas actions
import {
  REGISTER_USER,
  LOADING_ACTION,
  LOADING_ACTION_SUCCESS,
  LOADING_ACTION_FAIL,
  API_URL,
} from '../constants';

export const registerUser = (user) => ({
  type: REGISTER_USER,
  payload: user,
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
    const SUCCESS_CODE = 200;

    try {
      const res = await fetch(API_URL);

      if (res.status !== SUCCESS_CODE) {
        throw new Error('Error fetching data');
      }

      const data = await res.json();

      return dispatch(loadingActionSuccess(data));
    } catch (error) {
      return dispatch(loadingActionFail(error.message));
    }
  }
);
