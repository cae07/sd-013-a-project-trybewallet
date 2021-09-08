// Coloque aqui suas actions
export const USER_ACTION = 'USER_ACTION';
export const WALLET_FORM = 'WALLET_FORM';

export const actionUser = (payload) => ({
  type: USER_ACTION, payload });

export const walletForm = (payload) => ({
  type: WALLET_FORM, payload });
