import {
  IS_FETCHING,
  REQUEST_SUCCESS,
  REQUEST_FAIL,
  SAVE_EXPENSES_SUCCESS,
  DISPATCH_DETELE_ROW,
  DISPATCH_EDIT_LIST,
} from '../actions';

import { initialStateWithExpenses } from '../tests/mockData';

const INITIAL_STATE = {
  isFetching: false,
  editor: false,
  idToEdit: 0,
  currencies: [],
  expenses: [],
  requestFail: '',
};

let findExpendIndex;

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case IS_FETCHING:
    return { ...state, isFetching: true };

  case REQUEST_SUCCESS:
    return {
      ...state, isFetching: false, currencies: action.keys,
    };

  case REQUEST_FAIL:
    return { ...state, requestFail: action.fail, isFetching: false };

  case SAVE_EXPENSES_SUCCESS:
    return { ...state, expenses: [...state.expenses, { ...action.payload, id: state.expenses.length}], isFetching: false };

  case DISPATCH_DETELE_ROW:
    // Dica Gabriel Gaspar, pois o filter com erra condição 'remove' o que eu quiser...
    findExpendIndex = state.expenses.filter(({ id }) => id !== action.id);
    return { ...state, expenses: findExpendIndex };
  
  case DISPATCH_EDIT_LIST:
    return { ...state, editor: true, idToEdit: action.id }

  default:
    return state;
  }
};

export default wallet;
