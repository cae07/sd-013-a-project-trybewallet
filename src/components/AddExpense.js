import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setExpenses } from '../actions/index';

class AddExpense extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
      description: '',
      currencyOption: '',
      paymentMethod: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderAmount = this.renderAmount.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderCurrency = this.renderCurrency.bind(this);
    this.renderPaymentMethod = this.renderPaymentMethod.bind(this);
    this.renderTag = this.renderTag.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addExpense } = this.props;

    addExpense(this.state);
  }

  renderAmount() {
    const { amount } = this.state;
    return (
      <label htmlFor="valor">
        Valor:
        <input
          type="text"
          name="amount"
          id="valor"
          value={ amount }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderDescription() {
    const { description } = this.state;
    return (
      <label htmlFor="descricao">
        Descrição:
        <input
          type="text"
          name="description"
          id="descricao"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderCurrency() {
    const { currencyOption } = this.state;
    const { currencies } = this.props;
    return (
      <label htmlFor="moeda">
        Moeda:
        <select
          name="currencyOption"
          id="moeda"
          value={ currencyOption }
          onChange={ this.handleChange }
        >
          { currencies.map((currency, index) => (
            <option key={ index } value={ currency }>{ currency }</option>
          )) }
        </select>
      </label>
    );
  }

  renderPaymentMethod() {
    const { paymentMethod } = this.state;
    return (
      <label htmlFor="pagamento">
        Método de pagamento:
        <select
          name="paymentMethod"
          id="pagamento"
          value={ paymentMethod }
          onChange={ this.handleChange }
        >
          <option defaultValue="default">Selecione</option>
          <option value="dinheiro">Dinheiro</option>
          <option value="credito">Cartão de crédito</option>
          <option value="debito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag:
        <select name="tag" id="tag" value={ tag } onChange={ this.handleChange }>
          <option defaultValue="default">Selecione</option>
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        { this.renderAmount() }
        { this.renderDescription() }
        { this.renderCurrency() }
        { this.renderPaymentMethod() }
        { this.renderTag() }
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(setExpenses(expense)),
});

AddExpense.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  addExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
