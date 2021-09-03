import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      moedas: [],
    };
  }

  componentDidMount() {
    this.fetchMoedas();
  }

  async fetchMoedas() {
    const listaMoedas = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await listaMoedas.json();
    const moedas = Object.keys(data).filter((a) => a !== 'USDT');
    this.setState({ moedas });
  }

  render() {
    const { moedas } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="number" id="valor" />
        </label>
        <label htmlFor="descrição">
          Descrição
          <input type="text" id="descrição" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            { moedas.map((moeda) => (
              <option value={ moeda } key={ moeda }>
                { moeda }
              </option>))}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select id="pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

Form.propTypes = {

};

export default connect()(Form);
