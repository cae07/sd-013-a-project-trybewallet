// Coloque aqui suas actions
export const EMAIL = 'EMAIL';
export const WALLET = 'WALLET';

export const emailAction = (payload) => ({ type: EMAIL, payload });

export const walletAction = (payload) => ({ type: WALLET, payload });
