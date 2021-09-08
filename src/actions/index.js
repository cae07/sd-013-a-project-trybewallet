// Coloque aqui suas actions
export const USER_ACTION = 'USER_ACTION';
export const WALLET_ACTION = 'WALLET_ACTION';
export const WALLET_DESPESAS = 'WALLET_DESPESAS';

export const salvarStore = (payload) => ({
  type: USER_ACTION,
  payload,
});

export const sendWalletInfo = (payload) => ({
  type: WALLET_ACTION,
  payload,
});

export const actionDespesas = (payload) => ({
  type:WALLET_DESPESAS,
  payload,
});
