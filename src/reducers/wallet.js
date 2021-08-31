import {
  ECONOMY_API_REQUEST,
  ECONOMY_API_SUCESS,
  ECONOMY_API_FAILED,
  ECONOMY_SAVE_EXPENSE } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case ECONOMY_API_REQUEST:
    return { ...state, isLoading: true };

  case ECONOMY_API_SUCESS:
    return { ...state,
      isLoading: false,
      currencies: [...Object.keys(action.payload)],
    };

  case ECONOMY_API_FAILED:
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };

  case ECONOMY_SAVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
