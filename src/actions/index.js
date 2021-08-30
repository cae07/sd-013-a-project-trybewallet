// Coloque aqui suas actions
import {
  REGISTER_USER,
  LOADING_ACTION,
  LOADING_ACTION_SUCCESS,
  LOADING_ACTION_FAIL,
  API_URL,
} from '../constants';

const registerUser = (user) => ({
  type: REGISTER_USER,
  payload: user,
});

const loadingAction = () => ({
  type: LOADING_ACTION,
  isLoading: true,
});

const loadingActionSuccess = (success) => ({
  type: LOADING_ACTION_SUCCESS,
  isLoading: false,
  payload: success,
});

const loadingActionFail = (fail) => ({
  type: LOADING_ACTION_FAIL,
  isLoading: false,
  payload: fail,
});

const fetchData = () => (
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

export { registerUser, fetchData };
