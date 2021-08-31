// Esse reducer será responsável por tratar o todas as informações// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SUCCESS_FETCH } from '../actions/walletActions';

const initialState = {
  currencies: [],
  expenses: [],
};

function wallet(state = initialState, { type, payload }) {
  switch (type) {
  case SUCCESS_FETCH:
    return {
      ...state, currencies: { ...payload },
    };
  default:
    return state;
  }
}

export default wallet;
