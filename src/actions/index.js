export const SAVE_USER_EMAIL = 'SAVE_USER_EMAIL';
export const SET_TOTAL_VALUE = 'SET_TOTAL_VALUE';

export const saveUserEmail = (email) => ({
  type: SAVE_USER_EMAIL,
  email,
});

export const setTotalValue = (total) => ({
  type: SET_TOTAL_VALUE,
  total,
});
