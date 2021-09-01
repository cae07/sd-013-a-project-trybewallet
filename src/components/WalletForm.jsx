import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';

class WalletForm extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  mapCurrenciesIntoOptions() {
    const { state } = this.props;
    const { wallet: { currencies } } = state;
    return currencies.map((currency) => (
      <option key={ currency } value={ currency }>{currency}</option>));
  }

  render() {
    const { handleChange } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input id="value" type="number" onChange={ handleChange } />
        </label>
        <label htmlFor="description">
          Descrição:
          <input id="description" type="text" onChange={ handleChange } />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" onChange={ handleChange }>
            { this.mapCurrenciesIntoOptions() }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select id="method" onChange={ handleChange }>
            <option value="money">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag:
          <select id="category" onChange={ handleChange }>
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="job">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
        <label htmlFor="add-expense">
          <input
            id="add-expense"
            type="button"
            onClick={ this.handleClick }
            value="Adicionar Despesa"
          />
        </label>
      </form>
    );
  }
}

WalletForm.propTypes = {
  state: PropTypes.shape().isRequired,
  getCurrencies: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
