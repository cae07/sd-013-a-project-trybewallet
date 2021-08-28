export const SAVE_LOGIN = 'SAVE_LOGIN';
export const SAVE_WALLET = 'SAVE_LOGIN';

export const setInfoLogin = (payload) => (
  {
    type: SAVE_LOGIN, payload,
  });

export const setInfoWallet = (payload) => (
  {
    type: SAVE_WALLET, payload,
  });
