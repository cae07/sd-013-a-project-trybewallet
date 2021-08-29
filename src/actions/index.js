export const SAVE_LOGIN = 'SAVE_LOGIN';
export const SAVE_DESPESA = 'SAVE_LOGIN';

export const setInfoLogin = (payload) => (
  {
    type: SAVE_LOGIN, payload,
  });

export const setInfoDespesa = (payload) => (
  {
    type: SAVE_DESPESA, payload,
  });
