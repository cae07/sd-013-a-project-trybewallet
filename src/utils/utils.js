export default async function fetchCurrencies() {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    return json;
  } catch (error) {
    return error.message;
  }
}
