import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Requisito feito com auxílio do repositório de Lucas Lara:
// https://github.com/tryber/sd-010-a-project-trybewallet/pull/2

class Forms extends Component {
  render() {
    const { currencies } = this.props;
    const currencyName = Object.keys(currencies)
      .filter((currencie) => currencie !== 'USDT');
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input id="value" type="text" name="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input id="description" type="text" name="description" />
        </label>
        <label htmlFor="coin">
          Moeda
          <select id="coin" type="text" name="coin">
            {currencyName.map((currency) => (
              <option
                value={ currency }
                key={ currency }
              >
                {currency}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select id="payment-method" type="text" name="payment-method">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" type="text" name="tag">
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

Forms.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

export default connect(mapStateToProps)(Forms);
