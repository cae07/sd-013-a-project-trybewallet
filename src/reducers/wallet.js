// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { LOADING_TYPE } from '../actions';

const initialState = {
  loading: false,
  data: '',
  error: '',
};

function wallet(state = initialState, { type }) {
  switch (type) {
  case LOADING_TYPE:
    return {
      ...state,
      loading: true,
    };
  default:
    return state;
  }
}

export default wallet;
