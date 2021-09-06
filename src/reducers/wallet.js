import { LOADING_TYPE, SUCCESS_TYPE, ERROR_TYPE, ADD_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  isLoading: false,
  expenses: [],
  error: '',
};

const reducerWallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOADING_TYPE:
    return { ...state, isLoading: true };
  case SUCCESS_TYPE:
    return { ...state, currencies: action.payload, isLoading: false };
  case ERROR_TYPE:
    return { ...state, isLoading: false, error: 'Erro' };
  case ADD_EXPENSES:
    // chama o estado inicial, atualiza com o array juntando a chamada da API com o estado local
    return { ...state, expenses: [...state.expenses, { ...action.payload }], error: '' };
  default: return state;
  }
};

export default reducerWallet;
