// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_CURRENCIES:
    return {
      ...state,
      currencies: [{
        id: 0,
        value: action.valor,
        description: action.descricao,
        currency: action.moeda,
        method: action.pagamento,
        tag: action.despesa,
      }],
    };
  default:
    return state;
  }
};

export default wallet;
