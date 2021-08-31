export const SET_USER = 'SET_USER';
export const SET_WALLET = 'SET_WALLET';

export const userAction = (payload) => ({ type: SET_USER, payload });
export const walletAction = (payload) => ({ type: SET_WALLET, payload });
