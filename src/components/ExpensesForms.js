import React from 'react';

// [6.1.1] - criar o componente
class ExpensesForm extends React.Component {
  // 7.1.1 criar o state
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    };
    // 7.1.3 fazer o bind
    this.fetchCurrencyApi = this.fetchCurrencyApi.bind(this);
  }

  async componentDidMount() {
    this.fetchCurrencyApi();
  }
  // 7.1.2 criar o fetch

  async fetchCurrencyApi() {
    const api = 'https://economia.awesomeapi.com.br/json/all';
    const result = await fetch(api).then((response) => response.json());
    const noUSDT = Object.keys(result).filter((key) => key !== 'USDT');
    this.setState({ currencies: noUSDT });
  }

  render() {
    // 7.1.4 adicionar a constante do state
    const { currencies } = this.state;
    return (
      <form>
        <label htmlFor="expense">
          Valor:
          <input type="number" id="expense" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" name="currency">
            {/* 7.1.4 {X} Fazer um map pra criar uma option pra cada index do currency */}
            { currencies.map((currency) => (
              <option
                key={ currency }
                value={ currency }
              >
                { currency }
              </option>
            )) }
          </select>
        </label>
        <label htmlFor="pay-method">
          Método de pagamento:
          <select id="pay-method" name="pay-method">
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
            <option value="Dinheiro">Dinheiro</option>
          </select>
        </label>
        <label htmlFor="tag">
          tag:
          <select id="tag" name="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" />
        </label>
      </form>
    );
  }
}

export default ExpensesForm;
