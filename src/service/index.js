export const getCurrency = async () => {
  try {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await request.json();
    return json;
  } catch (error) {
    return null;
  }
};

export const calcTotal = (value, curr) => parseFloat(value) * parseFloat(curr.ask);
