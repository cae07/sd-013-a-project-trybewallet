export const validateEmail = (email) => {
  const pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
};

export const validatePassword = (password) => {
  const MIN_LENGTH_PASSWORD = 6;
  return password.length >= MIN_LENGTH_PASSWORD;
};
