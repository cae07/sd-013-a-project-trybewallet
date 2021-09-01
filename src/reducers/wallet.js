// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// import { SET_EMAIL } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case '':
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
}

export default wallet;
