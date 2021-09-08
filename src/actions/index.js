// Coloque aqui suas actions
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const UPDATE_CURRENCES = 'UPDATE_CURRENCES';
export const ERRO_CURRENCES = 'ERRO_CURRENCES';

export const loginSubmit = (object) => ({ type: LOGIN_SUBMIT, payload: object });
export const updateCurrences = (payload) => ({ type: UPDATE_CURRENCES, payload });
export const erroUpdate = (payload) => ({ type: ERRO_CURRENCES, payload });

export const fetchCurrencies = () => (
  async (dispath) => {
    try {
      const currencesPromise = await fetch('https://economia.awesomeapi.com.br/json/all');
      const dataCurrence = await currencesPromise.json();
      const currences = Object.keys(dataCurrence).filter((key) => key !== 'USDT');
      console.log(currences);
      return dispath(updateCurrences(currences));
    } catch (error) {
      return dispath(erroUpdate(error.message));
    }
  }
);
