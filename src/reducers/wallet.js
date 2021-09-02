const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case 'REQUEST_MOEDAS':
    return { ...state, status: action.status };
  case 'RECEIVE_MOEDAS':
    return { ...state, currencies: [{ ...action.payload }], status: 'Loaded' };
  case 'REQUEST_ERROR':
    return { ...state, status: action.status };
  case 'FORM_ACT':
    return { ...state, expenses: [...state.expenses, { ...action.payload }] };
  default:
    return state;
  }
};

export default wallet;
