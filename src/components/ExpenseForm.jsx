import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { expenseList } from '../actions/index';

class ExpenseForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: -1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: 'Alimentação',
      exchangeRates: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { target: { name, value } } = event;
    this.setState({
      [name]: value,
    });
  }

  async handleClick(event) {
    event.preventDefault();
    const { dispatchExpenses } = this.props;
    let { id } = this.state;
    this.setState(({ id: id += 1 }));
    const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await fetchApi.json();
    delete response.USDT;
    this.setState({ exchangeRates: response });
    dispatchExpenses(this.state);
  }

  inputValue(value) {
    return (
      <label htmlFor="valor">
        Valor
        <input
          type="number"
          name="value"
          id="valor"
          onChange={ this.handleChange }
          value={ value }
        />
      </label>
    );
  }

  inputDescription(description) {
    return (
      <label htmlFor="descricao">
        Descrição
        <input
          type="text"
          name="description"
          id="descricao"
          onChange={ this.handleChange }
          value={ description }
        />
      </label>
    );
  }

  inputCurrency(currencies, currency) {
    return (
      <label htmlFor="moeda">
        Moeda
        <select
          name="currency"
          id="moeda"
          onChange={ this.handleChange }
          value={ currency }
        >
          {currencies.filter((curr) => curr !== 'USDT').map((curr) => (
            <option key={ curr } value={ curr }>{ curr }</option>))}
        </select>
      </label>
    );
  }

  inputMethod(method) {
    return (
      <label htmlFor="pagamento">
        Método de pagamento
        <select
          name="method"
          id="pagamento"
          onChange={ this.handleChange }
          value={ method }
        >
          <option name="dinheiro">Dinheiro</option>
          <option name="cartão de crédito">Cartão de crédito</option>
          <option name="cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  inputTag(tag) {
    return (
      <label htmlFor="tag">
        Tag
        <select
          name="tag"
          id="tag"
          onChange={ this.handleChange }
          value={ tag }
        >
          <option name="alimentação">Alimentação</option>
          <option name="lazer">Lazer</option>
          <option name="trabalho">Trabalho</option>
          <option name="transporte">Transporte</option>
          <option name="saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { wallet: { currencies } } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <fieldset>
        <form>
          {this.inputValue(value)}
          {this.inputDescription(description)}
          {this.inputCurrency(currencies, currency)}
          {this.inputMethod(method)}
          {this.inputTag(tag)}

          <button type="button" onClick={ this.handleClick }>Adicionar Despesa</button>
        </form>

      </fieldset>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  dispatchExpenses: (state) => dispatch(expenseList(state)),
});

ExpenseForm.propTypes = {
  wallet: propTypes.shape({
    currencies: propTypes.arrayOf(propTypes.string),
  }).isRequired,
  dispatchExpenses: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
