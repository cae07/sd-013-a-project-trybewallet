// Esse reducer será responsável por tratar as informações da pessoa usuária
import {
  LOADING_ACTION,
  LOADING_ACTION_SUCCESS,
  LOADING_ACTION_FAIL,
} from '../constants';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOADING_ACTION:
    return { ...state, loading: true };

  case LOADING_ACTION_SUCCESS:
    return { ...state, data: action.payload, loading: false };

  case LOADING_ACTION_FAIL:
    return { ...state, data: action.payload, loading: false };

  default:
    return state;
  }
};

export default user;
