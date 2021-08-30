// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import INITIAL_STATE from '../helpers/initialState';

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SEGUNDA_ACTION':
    return { ...state, wallet: action.value };
  default:
    return state;
  }
};

export default wallet;
