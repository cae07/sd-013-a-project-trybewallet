import { ACTION_SUCESS,
  ACTION_LOADING,
  ACTION_ERROR,
  ACTION_ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ACTION_LOADING:
    return { ...state, loading: true };
  case ACTION_SUCESS:
    return { ...state, currencies: action.payload, loading: false };
  case ACTION_ERROR:
    return { ...state, loading: false, error: 'ERRO !' };
  case ACTION_ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default walletReducer;
