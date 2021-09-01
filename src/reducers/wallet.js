import { EXPENSE_API, REQUEST_API } from '../actions';

const INITIAL_STATE = ({
  currencies: [],
  expenses: [],
  loading: false,

});

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case EXPENSE_API:
    return {
      ...state,
      loading: false,
      expenses: [...state.expenses, { ...action.expense,
        exchangeRates: action.data }],
    };
  case REQUEST_API:
    return {
      ...state,
      loading: true,
    };
  default:
    return state;
  }
}

export default wallet;

// fiz o reducer case-expense-api com a ajuda do eduardo na monitoria, uso o spread dentro do array para chamar o estado anterior e manter ele
// para juntar a despesa nova que chega com o exchange rates usou o spread.action.expense era um objeto e exchangerates era outro, por isso o spread para virar um só.
// unindo dois objetos em um só.
