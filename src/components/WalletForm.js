import React from 'react';

class WalletForm extends React.Component {
  constructor() {
    super();
    this.fetchApi = this.fetchApi.bind(this);
    this.state = {
      apiResponse: [],
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          apiResponse: json,
        });
      });
  }

  filterCurrency() {
    const { apiResponse } = this.state;
    const init = Object.keys(apiResponse);
    const filteredCurrencys = init.filter((initial) => initial !== 'USDT');
    return filteredCurrencys;
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="price">
            Valor
            <input type="number" name="price" id="price" />
          </label>

          <label htmlFor="description">
            Descrição
            <input type="text" name="description" id="description" />
          </label>

          <label htmlFor="currency">
            Moeda
            <select name="currency" id="currency">
              { this.filterCurrency()
                .map((option, index) => (<option key={ index }>{ option }</option>)) }
            </select>
          </label>

          <label htmlFor="methodOfPayment">
            Método de pagamento
            <select name="methodOfPayment" id="methodOfPayment">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default WalletForm;
