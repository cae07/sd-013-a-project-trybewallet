// Coloque aqui suas actions
import { GET_EXCHANGE_RATE, ADD_USER, IS_FETCHING } from './actionTypes';

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export const getExchangeRate = (payload) => ({
  type: GET_EXCHANGE_RATE,
  payload,
});

export const isFetching = () => ({
  type: IS_FETCHING,
});

// getApiInfo = () => (dispatch) => {
//   dispatch(isFetching());
//   return {
//     fetch
//   };
// };
