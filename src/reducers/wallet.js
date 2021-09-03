import {
  SET_WALLET,
  REQUEST_FETCH, RECEIVE_FETCH, FAILL_FETCH,
  SET_EXPENSE, DEL_EXPENSE, UPDATE_EXENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_WALLET:
    return { ...state, ...action.payload };
  case REQUEST_FETCH:
    return { ...state, status: action.status };
  case RECEIVE_FETCH:
    return { ...state, currencies: [{ ...action.payload }] };
  case FAILL_FETCH:
    return { ...state, status: action.status };
  case SET_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case DEL_EXPENSE:
    return { ...state,
      expenses: state.expenses
        .filter((expense) => expense.id !== action.payload) };
  case UPDATE_EXENSE:
    return { ...state,
      expenses: [
        ...state.expenses.filter((item) => action.payload.id !== item.id),
        action.payload].sort((a, b) => a.id - b.id) };
  default:
    return state;
  }
};

export default wallet;
