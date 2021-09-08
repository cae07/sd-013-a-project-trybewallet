export const EMAIL = 'EMAIL';
export const PASSWORD = 'PASSWORD';

export const Email = (payload) => ({
  type: EMAIL,
  payload });

export const Password = (payload) => ({
  type: PASSWORD,
  payload });
