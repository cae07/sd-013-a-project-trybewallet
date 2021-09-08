// // Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { LOADING_TYPE, SUCCESS_TYPE, ERROR_TYPE, ADD_EXPENSES } from "../actions";

const INITIAL_STATE = {
    loading:false,
    currencies: [],
    expenses: [],
    error: '',
};

export default function reducerWallet(state = INITIAL_STATE, action) {
    switch(action.type){
        case LOADING_TYPE:
            return {...state, loading: true};
        case SUCCESS_TYPE:
            return { ...state, currencies: action.payload, loading: false };
        case ERROR_TYPE:
            return { ...state, loading: false, error: 'Erro' };
        case ADD_EXPENSES:
            return { ...state, expenses: [...state.expenses, { ...action.payload }], error: '' };
        default:
            return state;
    }
}
