export const ADD_USER = 'USER';
export const WALLET = 'WALLET';

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export const wallet = (payload) => ({
  type: WALLET,
  payload,
});
