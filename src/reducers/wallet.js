// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import WALLET_ACTION from '../actions';

const ESTADO_INICIAL = {
  currencies: [],
  expenses: [],
};

const wallet = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
  case WALLET_ACTION:
    return {
      ...state,
    };
  default:
    return state;
  }
};
export default wallet;
