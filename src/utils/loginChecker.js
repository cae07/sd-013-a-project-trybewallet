// Consultei os links abaixo para auxiliar no regex:
// https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/

export function emailChecker(email) {
  const regex = /\S+@\S+\.\S+/;

  return regex.test(email);
}

export function passwordChecker(password) {
  const MIN_LENGTH_PASSWORD = 6;

  return password.length >= MIN_LENGTH_PASSWORD;
}
