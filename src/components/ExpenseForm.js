import React from 'react';

class ExpenseForm extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
    };
    this.fetchCurrencyApi = this.fetchCurrencyApi.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencyApi();
  }

  async fetchCurrencyApi() {
    const api = 'https://economia.awesomeapi.com.br/json/all';
    const result = await fetch(api).then((response) => response.json());
    const withdrawUSDT = Object.keys(result).filter((key) => key !== 'USDT');
    this.setState({ currencies: withdrawUSDT });
  }

  render() {
    const { currencies } = this.state;

    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="number" id="valor" />
        </label>
        <label htmlFor="descrição">
          Descrição:
          <textarea type="text" id="descrição" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda">
            { currencies.map((currency) => (
              <option key={ currency } value={ currency }>
                { currency }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento:
          <select id="pagamento">
            <option selected value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de Crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag">
            <option selected value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default ExpenseForm;
