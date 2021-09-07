import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import currenciesAPI from '../services';
import { actionAddExpense } from '../actions';

class WalletForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: 'USD',
      value: 0,
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { target: { id, value } } = event;
    this.setState({
      [id]: value,
    });
  }

  async handleClick() {
    const { addExpense } = this.props;
    const { currency, value, description, method, tag } = this.state;
    const exchangeRates = await currenciesAPI();
    const payload = {
      currency,
      value,
      description,
      method,
      tag,
      exchangeRates,
    };
    addExpense(payload);
  }

  mapCurrenciesIntoOptions() {
    const { state: { wallet: { currencies } } } = this.props;
    const filteredCurrencies = currencies
      .filter((currencie) => currencie !== 'USDT');
    return filteredCurrencies.map((currency) => (
      <option key={ currency } value={ currency }>{currency}</option>));
  }

  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input id="value" type="number" onChange={ this.handleChange } />
        </label>
        <label htmlFor="description">
          Descrição
          <input id="description" type="text" onChange={ this.handleChange } />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" onChange={ this.handleChange }>
            { this.mapCurrenciesIntoOptions() }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  state: PropTypes.shape().isRequired,
  addExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (payload) => dispatch(actionAddExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
