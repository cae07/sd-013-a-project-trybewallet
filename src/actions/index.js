// Coloque aqui suas actions

export const putUser = (payload) => (
  { type: 'ADD_USERFORMS', payload });

export const putCoins = (payload) => (
  { type: 'ADD_COINS', payload }
);

export const API_RESPONSE = (payload) => (
  { type: 'ADD_API_RESPONSE', payload }
);

export const addExpenses = (payload) => (
  { type: 'ADD_EXPENSE', payload }
);

// const putWallet = (payload) => (
//   { type: 'ADD_WALLET', payload });
