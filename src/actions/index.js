export const SAVE_LOGIN = 'SAVE_LOGIN';
export const SAVE_DESPESA = 'SAVE_LOGIN';

export const setInfoLogin = (state) => (
  {
    type: SAVE_LOGIN, state,
  });

export const setInfoDespesa = (state) => (
  {
    type: SAVE_DESPESA, state,
  });
