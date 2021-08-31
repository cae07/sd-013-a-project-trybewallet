export const SET_USER = 'SET_USER';
export const SET_WALLET = 'SET_WALLET';

export const setUser = (state) => ({
  type: SET_USER, state,
});

export const setWallet = (state) => ({
  type: SET_WALLET, state,
});
