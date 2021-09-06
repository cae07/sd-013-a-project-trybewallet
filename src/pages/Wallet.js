import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      moedas: {},
    };
    this.fetchMoeda();
  }

  adcionaMoedas() {
    const selectMoedas = document.querySelector('#moedas');
    const { moedas } = this.state;
    Object.keys(moedas).forEach((moeda, i) => {
      if (moeda !== 'USDT') {
        const novaOpcao = document.createElement('option');
        novaOpcao.value = moeda;
        novaOpcao.textContent = moeda;
        novaOpcao.id = i;
        selectMoedas.appendChild(novaOpcao);
      }
    });
  }

  async fetchMoeda() {
    const moedas = fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await moedas;
    this.setState({ moedas: await response.json() });
    this.adcionaMoedas();
  }

  render() {
    const { email } = this.props;

    return (
      <>
        <header>
          <h4 data-testid="email-field">{ email }</h4>
          <h4 data-testid="total-field">0</h4>
          <h4 data-testid="header-currency-field">BRL</h4>
        </header>
        <form>
          <label htmlFor="valor">
            Valor
            <input id="valor" type="number" />
          </label>
          <label htmlFor="moedas">
            Moeda
            <select id="moedas"> </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento
            <select id="pagamento">
              <option value="" key="">Dinheiro</option>
              <option value="" key="">Cartão de crédito</option>
              <option value="" key="">Cartão de Débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option value="">Alimentação</option>
              <option value="">Lazer</option>
              <option value="">Trabalho</option>
              <option value="">Transporte</option>
              <option value="">Saúde</option>
            </select>
          </label>
          <label htmlFor="descricao">
            Descrição
            <textarea id="descricao"> </textarea>
          </label>
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({ email: state.user.email });
export default connect(mapStateToProps, null)(Wallet);
