// 3.3.2 criar a action do user

export const login = 'LOGIN';
export const loginAction = (value) => ({
  type: login,
  value,
});
