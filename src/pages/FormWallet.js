import React from 'react';

class FormWallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
    };
    this.fetchMoedas = this.fetchMoedas.bind(this);
  }

  componentDidMount() {
    this.fetchMoedas();
  }

  fetchMoedas() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => {
        response.json().then((data) => {
          const moedas = (data);
          delete moedas.USDT; // com ajuda de Gabriel Gaspar e Josué
          const arrayMoedas = Object.keys(moedas); // Object.keys pega chave e key tranforma o obj. em array
          this.setState({ currencies: arrayMoedas });
        });
      });
  }

  render() {
    const { currencies } = this.state;
    return (
      <form>
        <label htmlFor="valorForm">
          Valor
          <input
            type="text"
            name="valor"
            id="valorForm"
          />
        </label>
        <label htmlFor="descriçãoForm">
          Descrição
          <input
            type="text"
            id="descriçãoForm"
            name="descrição"
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            {currencies.map((moeda, index) => (
              <option key={ index }>
                { moeda }
              </option>))}
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento
          <select id="metodo">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
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

export default FormWallet;
