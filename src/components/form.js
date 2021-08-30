import React from 'react';

class form extends React.Component {
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

    const initials = Object.keys(apiResponse);
    // usado para filtrar USDT que nao será usado
    const filteredInitials = initials.filter((initial) => initial !== 'USDT');

    return filteredInitials;
  }

  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" name="value" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" name="description" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency">
            {/* usa map para mostrar as moedas  */}
            { this.filterCurrency()
              .map((option, index) => (<option key={ index }>{ option }</option>)) }
          </select>
        </label>

        <label htmlFor="payment">
          Método de Pagamento
          <select name="payment" id="payment">
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
    );
  }
}
export default form;
