import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, fetchCurrencies, updateTotalExpenses } from '../actions';

class ExpenseForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: -1,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderInputText = this.renderInputText.bind(this);
    this.renderSelectCurrencies = this.renderSelectCurrencies.bind(this);
    this.renderMethodPayment = this.renderMethodPayment.bind(this);
    this.renderTagSelect = this.renderTagSelect.bind(this);
    this.calculateTotalExpenses = this.calculateTotalExpenses.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  calculateTotalExpenses() {
    const { updateDisplayTotalExpenses, wallet: { expenses } } = this.props;
    const dblTotal = expenses.reduce((acc, curr) => {
      const { value, currency, exchangeRates } = curr; // expenses[index];
      const { ask } = exchangeRates[currency];
      const expenseBRL = parseFloat(value) * parseFloat(ask);
      return acc + expenseBRL;
    }, 0);
    updateDisplayTotalExpenses(dblTotal.toFixed(2));
  }

  async handleClick() {
    const { getExchangeRates,
      updateExpenses,
      wallet: { resultData } } = this.props;
    getExchangeRates();
    let { id } = this.state;
    await this.setState({
      id: id += 1,
      exchangeRates: resultData,
    }, () => {
      updateExpenses(this.state);
    });
    this.calculateTotalExpenses();
  }

  renderInputText(label, name, keyState) {
    return (
      <label htmlFor={ name }>
        { label }
        <input
          type="text"
          name={ name }
          id={ name }
          value={ keyState }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderSelectCurrencies() {
    const { currency } = this.state;
    const { wallet: { currencies } } = this.props;
    return (
      <label htmlFor="moeda">
        Moeda
        <select
          name="currency"
          id="moeda"
          value={ currency }
          onChange={ this.handleChange }
        >
          {currencies.filter((curr) => curr !== 'USDT').map(
            (curr) => <option key={ curr } value={ curr }>{ curr }</option>,
          )}
        </select>
      </label>
    );
  }

  renderMethodPayment() {
    const { method } = this.state;
    const arrMethodPayments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <label htmlFor="metodoDePagamento">
        Método de pagamento
        <select
          name="method"
          id="metodoDePagamento"
          value={ method }
          onChange={ this.handleChange }
        >
          { arrMethodPayments.map((methodPayment) => (
            <option key={ methodPayment } value={ methodPayment }>{methodPayment}</option>
          )) }
        </select>
      </label>
    );
  }

  renderTagSelect() {
    const { tag } = this.state;
    const arrCategories = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <label htmlFor="tag">
        Tag
        <select name="tag" id="tag" value={ tag } onChange={ this.handleChange }>
          { arrCategories.map((category) => (
            <option key={ category } value={ category }>{category}</option>
          )) }
        </select>
      </label>
    );
  }

  render() {
    const { value, description } = this.state;
    return (
      <div>
        <form action="">
          { this.renderInputText('Valor', 'value', value) }
          { this.renderInputText('Descrição', 'description', description) }
          { this.renderSelectCurrencies() }
          { this.renderMethodPayment() }
          { this.renderTagSelect() }
          <button type="button" onClick={ this.handleClick }>Adicionar Despesa</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  getExchangeRates: () => dispatch(fetchCurrencies()),
  updateExpenses: (object) => dispatch(addExpense(object)),
  updateDisplayTotalExpenses: (number) => dispatch(updateTotalExpenses(number)),
});

ExpenseForm.propTypes = {
  wallet: propTypes.shape({
    currencies: propTypes.arrayOf(propTypes.string),
    expenses: propTypes.arrayOf(propTypes.string),
    resultData: propTypes.objectOf(propTypes.string).isRequired,
  }).isRequired,
  updateDisplayTotalExpenses: propTypes.func.isRequired,
  getExchangeRates: propTypes.func.isRequired,
  updateExpenses: propTypes.func.isRequired,
  expenses: propTypes.arrayOf(propTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
