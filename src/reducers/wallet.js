import { GET_EXPENSES, GET_SECESS, GET_REJECT_API } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  erroMenssage: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_SECESS:
    return { ...state, currencies: [...action.payload] };

  case GET_REJECT_API:
    return { ...state, erroMenssage: action.erro };

  case GET_EXPENSES:
    return { ...state,
      expenses: [...state.expenses, { ...action.expense, exchangeRates: action.data }] };

  default: return state;
  }
};

export default wallet;
// TODO O MÉRITO DA QUESTÃO 8 PARA MATHEUS MACEDO -> VALEU BROW!
