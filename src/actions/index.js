const USER = 'USER';
const WALLET = 'WALLET';

export const loginAction = (email) => ({
  type: USER,
  payload: email,
});

export const walletAction = () => ({
  type: WALLET,
  payload,
});
