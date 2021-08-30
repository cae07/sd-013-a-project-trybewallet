import {
  SET_CURRENCIES_FAILURE,
  SET_CURRENCIES_SUCCESS,
  SET_LOADING,
} from '../actions/actionTypes';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
  isLoading: true,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_LOADING:
    return { ...state, isLoading: false };
  case SET_CURRENCIES_SUCCESS:
    return { ...state, currencies: action.payload, isLoading: false };
  case SET_CURRENCIES_FAILURE:
    return { ...state, error: action.payload, isLoading: false };
  default:
    return state;
  }
};

export default wallet;
