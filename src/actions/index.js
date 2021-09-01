export const LOGIN = 'LOGIN';
export const WALLET = 'WALLET';

export const loginAction = (email) => ({
  type: LOGIN,
  payload: email,
});

export const passwordAction = (currencies, expenses) => ({
  type: WALLET,
  wallet: {
    currencies,
    expenses,
  },
});
