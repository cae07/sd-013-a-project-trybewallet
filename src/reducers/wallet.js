import { SAVE_LOGIN, SAVE_DESPESA } from '../actions';

const INITIAL_STATE = {
  login: '',
  despesas: {},
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_LOGIN:
    return {
      ...state,
      login: action.payload,
    };
  case SAVE_DESPESA:
    return {
      ...state,
      despesas: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
