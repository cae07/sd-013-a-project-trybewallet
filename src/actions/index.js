// Coloque aqui suas actions
export const EMAIL = 'EMAIL';
export const WALLET = 'WALLET';

export const emailAction = (payload) => ({ type: EMAIL, email: payload });

export const walletAction = () => ({ type: WALLET });
