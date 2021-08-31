import { WALLET_INFO } from '../actions';
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET_INFO:
    return { ...state, user: action.payload };
  default:
    return state;
  }
}

export default reducer;
