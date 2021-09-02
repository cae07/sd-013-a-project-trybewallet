import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletForm extends React.Component {
  mapCurrenciesIntoOptions() {
    const { state: { wallet: { currencies } } } = this.props;
    const filteredCurrencies = currencies
      .filter((currencie) => currencie !== 'USDT');
    return filteredCurrencies.map((currency) => (
      <option key={ currency } value={ currency }>{currency}</option>));
  }

  render() {
    const { handleChange, handleClick } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input id="value" type="number" onChange={ handleChange } />
        </label>
        <label htmlFor="description">
          Descrição
          <input id="description" type="text" onChange={ handleChange } />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" onChange={ handleChange }>
            { this.mapCurrenciesIntoOptions() }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" onChange={ handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" onChange={ handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  state: PropTypes.shape().isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(WalletForm);
