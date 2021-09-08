import {
  GET_MOEDA,
  REQUEST_MOEDAAPI,
  ERROR_REQUEST_MOEDA,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_MOEDAAPI:
    return {
      ...state,
      loading: true,
    };
  case GET_MOEDA:
    return {
      ...state,
      currencies: action.payload,
      loading: false,
    };
  case ERROR_REQUEST_MOEDA:
    return {
      ...state,
      error: action.payload,
      loading: false,
    };
  default:
    return state;
  }
};

export default wallet;

// Requisito 7 foi resolvido com a GRANDE ajuda do Vinicius Dyonisio em salas de estudos, e em mensagens privadas no slack.
