import {
  IS_FETCHING,
  REQUEST_SUCCESS,
  REQUEST_FAIL,
  SAVE_EXPENSES_SUCCESS,
  DISPATCH_DETELE_ROW,
  DISPATCH_EDIT_LIST,
  DISPATCH_EDITED_EXPENSES,
} from '../actions';

// import { initialStateWithExpenses } from '../tests/mockData';

const INITIAL_STATE = {
  isFetching: false,
  editor: false,
  idToEdit: 0,
  currencyToExchange: 'BRL',
  currencies: [],
  expenses: [],
  requestFail: '',
};

let findExpend;

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
    return {
      ...state,
      expenses: [...state.expenses, { ...action.obj, id: state.expenses.length }],
      isFetching: false,
    };

  case DISPATCH_DETELE_ROW:
    // Dica Gabriel Gaspar, pois o filter com erra condição 'remove' o que eu quiser...
    findExpend = state.expenses.filter(({ id }) => id !== action.id);
    return { ...state, expenses: findExpend };

  case DISPATCH_EDIT_LIST:
    return { ...state, editor: true, idToEdit: action.id };

  case DISPATCH_EDITED_EXPENSES:
    findExpend = state.expenses.reduce(
      (acc, curr) => {
        if (curr.id !== state.idToEdit) return [...acc, curr];
        return [...acc, action.state];
      }, [],
    );
    return { ...state, expenses: findExpend, editor: false };

  default:
    return state;
  }
};

export default wallet;
