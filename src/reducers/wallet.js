const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case '':
    return '';
  default:
    return state;
  }
};

export default wallet;
