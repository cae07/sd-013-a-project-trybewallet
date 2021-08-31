const urlAPI = 'https://economia.awesomeapi.com.br/json/all';

export async function getCurrencies() {
  try {
    const fetchResult = await fetch(urlAPI);
    const currencies = await fetchResult.json();
    return currencies;
  } catch (err) {
    console.error(err);
  }
}

export const testee = 'teste';
