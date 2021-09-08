import { REQUEST_VALUES, RECEIVE_VALUES, ADD_EXPENSES,
  DELETE_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  id: 0,
  currencies: [],
  expenses: [],
  isFetching: false,
};

export default function reducerUser(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_VALUES:
    return ({
      ...state,
      isFetching: true,
    });
  case RECEIVE_VALUES:
    return ({
      ...state,
      isFetching: false,
      currencies: action.values,
    });
  case ADD_EXPENSES:
    return ({
      ...state,
      id: state.id + 1,
      expenses: [...state.expenses,
        { id: action.id,
          ...action.payload,
          exchangeRates: state.currencies,
        }],
    });
  case DELETE_EXPENSES:
    return ({
      ...state,
      expenses: [...state.expenses.filter((e) => e.id !== action.id)],
    });
  default:
    return state;
  }
}
