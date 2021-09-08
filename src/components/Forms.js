import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpense, fetchCoins } from '../actions';

// Requisito feito com auxílio do repositório de Lucas Lara:
// https://github.com/tryber/sd-010-a-project-trybewallet/pull/2

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
      exchangeRates: {},
    };

    this.getCurrencyRate = this.getCurrencyRate.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.C = this.C.bind(this);
  }

  getCurrencyRate() {
    const { currencies } = this.props;
    this.setState({ exchangeRates: currencies });
  }

  async handleClick() {
    const { getCoins, addExpenseProps, expenses } = this.props;
    await getCoins();
    this.getCurrencyRate();
    const id = expenses.length;
    const infos = { ...this.state, id };
    addExpenseProps(infos);
    this.setState({
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    });
  }

  C({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.props;
    const currencyName = Object.keys(currencies)
      .filter((currencie) => currencie !== 'USDT');
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input id="value" type="text" value={ value } onChange={ this.C } />
        </label>
        <label htmlFor="description">
          Descrição
          <input id="description" type="text" value={ description } onChange={ this.C } />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" type="text" value={ currency } onChange={ this.C }>
            {currencyName.map((currencyIndex) => (
              <option
                value={ currencyIndex }
                key={ currencyIndex }
              >
                {currencyIndex}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" type="text" value={ method } onChange={ this.C }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" type="text" value={ tag } onChange={ this.C }>
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

Forms.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  getCoins: () => dispatch(fetchCoins()),
  addExpenseProps: (infos) => dispatch(addExpense(infos)),
});

const mapStateToProps = ({ wallet: { currencies, expenses } }) => ({
  currencies,
  expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
