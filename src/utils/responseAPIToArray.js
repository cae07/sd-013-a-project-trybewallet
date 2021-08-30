export default function responseAPIToArray(currencies) {
  const currenciesToArray = Object.entries(currencies).map((currency) => currency[1]);
  const currenciesWithoutBRLT = currenciesToArray
    .filter((currency) => currency.codein !== 'BRLT');
  const mapCurrenciesToOptions = currenciesWithoutBRLT
    .map((currency) => currency.code);

  return mapCurrenciesToOptions;
}
