import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveExpenseThunk } from '../actions';

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      payment: 'money',
      tag: 'food',
      shouldIFetch: true,
      exchangeRates: {},
      id: 0,
    };
    this.renderValue = this.renderValue.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderCurrency = this.renderCurrency.bind(this);
    this.renderPayment = this.renderPayment.bind(this);
    this.renderTag = this.renderTag.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fetchApi = this.fetchApi.bind(this);
    this.handleAddExpenseBtn = this.handleAddExpenseBtn.bind(this);
  }

  async componentDidMount() {
    const { shouldIFetch } = this.state;
    if (shouldIFetch) this.fetchApi();
  }

  fetchApi() {
    this.setState({ shouldIFetch: true }, async () => {
      const fetchAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
      const json = await fetchAPI.json();
      delete json.USDT;
      this.setState({ exchangeRates: { ...json }, shouldIFetch: false });
      // return json;
    });
  }

  handleAddExpenseBtn() {
    const { value, description, currency, payment, tag, id } = this.state;
    const { saveExpense } = this.props;
    const payload = { expense: {
      id,
      value,
      description,
      currency,
      payment,
      tag,
    } };
    saveExpense(payload);
    this.setState((prevState) => ({ id: prevState.id + 1 }));
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  renderValue() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor
        <input
          id="value"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderDescription() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição
        <input
          id="description"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderCurrency() {
    const { currency, exchangeRates } = this.state;
    return (
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          {Object.keys(exchangeRates).map((obj) => (
            <option
              key={ exchangeRates[obj].code }
              value={ exchangeRates[obj].code }
            >
              { exchangeRates[obj].code }
            </option>
          ))}
        </select>
      </label>
    );
  }

  renderPayment() {
    const { payment } = this.state;
    return (
      <label htmlFor="payment">
        Método de pagamento
        <select
          id="payment"
          name="payment"
          value={ payment }
          onChange={ this.handleChange }
        >
          <option value="money">Dinheiro</option>
          <option value="credit">Cartão de crédito</option>
          <option value="debit">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          <option value="food">Alimentação</option>
          <option value="hobby">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="transport">Transporte</option>
          <option value="health">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    // const { shouldIFetch } = this.state;
    // if (shouldIFetch) return <p>Loading...</p>;
    return (
      <form>
        { this.renderValue() }
        { this.renderDescription()}
        { this.renderCurrency()}
        { this.renderPayment() }
        { this.renderTag() }
        <button
          type="button"
          onClick={ this.handleAddExpenseBtn }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  saveExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (payload) => dispatch(saveExpenseThunk(payload)),
});

export default connect(null, mapDispatchToProps)(ExpenseForm);
