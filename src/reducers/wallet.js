import { FETCH_API } from '../actions/actionTypes';

const INITIAL_STATE = {
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  console.log(action.payload);
  switch (action.type) {
  case FETCH_API:
    return { expenses: [...state.expenses, ...[action.payload.expenses]] };
  default:
    return state;
  }
}

export default wallet;
