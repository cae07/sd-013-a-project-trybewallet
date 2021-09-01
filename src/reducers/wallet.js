import { error } from 'loglevel';
import {
  LOADING_COIN, SUCESS_COIN, FAIL_COIN, SUCESS_ATUAL } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: {
    menssage: '',
  },
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOADING_COIN:
    return { ...state, isLoading: true };
  case SUCESS_COIN:
    return { ...state, currencies: [...action.payload], isLoading: false };
  case FAIL_COIN:
    return { ...state, error: { ...error, menssage: action.payload }, isLoading: false };
  case SUCESS_ATUAL:
    return { ...state,
      expenses:
       [...state.expenses,
         { ...action.expenses, exchangeRates: action.data },
       ] };
  default:
    return state;
  }
}// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
