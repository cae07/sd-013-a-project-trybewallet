import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.fetchApi = this.fetchApi.bind(this);
    this.state = {
      currencies: [],
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const ApiFetch = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await ApiFetch.json();
    const Allcurrencies = Object.keys(json);
    const currenciesLessUSDT = Allcurrencies.filter((currencie) => currencie !== 'USDT');
    this.setState({
      currencies: currenciesLessUSDT,
    });
  }

  render() {
    const { currencies } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" name="valor" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input type="text" name="descricao" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select name="moeda" id="moeda">
            {currencies.map((currencie, index) => (
              <option key={ index }>{currencie}</option>
            ))}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select name="pagamento" id="pagamento">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de Débito"> Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="gastos">
          Tag
          <select name="pagamento" id="gastos">
            <option value="Alimentação">Alimentação</option>
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

export default Form;
