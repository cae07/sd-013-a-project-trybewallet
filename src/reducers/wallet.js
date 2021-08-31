const INITIAL_STATE = {
  currencies: {},
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'currencies':
    return { ...state, currencies: action.state };
  default:
    return state;
  }
};

export default wallet;
