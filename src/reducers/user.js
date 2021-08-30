// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOADING_TYPE, SUCCESS_TYPE, ERROR_TYPE } from '../actions';

const initialState = {
  loading: false,
  data: '',
  error: '',
};

function reducerUser(state = initialState, action) {
  switch (action.type) {
  case LOADING_TYPE:
    return { ...state, loading: true };

  case SUCCESS_TYPE:
    return { ...state, data: payload, loading: false };

  case ERROR_TYPE:
    return { ...state, error: payload, loading: false };

  default:
    return state;
  }
}

export default reducerUser;
