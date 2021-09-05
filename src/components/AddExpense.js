import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setExpenses, setCurrencies } from '../actions/index';

class AddExpense extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: 10,
      currency: '',
      method: '',
      tag: '',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderAmount = this.renderAmount.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderCurrency = this.renderCurrency.bind(this);
    this.renderPaymentMethod = this.renderPaymentMethod.bind(this);
    this.renderTag = this.renderTag.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { addExpense, getCurrencies } = this.props;
    const { id } = this.state;
    const data = await getCurrencies();
    const newId = id + 1;

    addExpense({
      ...this.state,
      exchangeRates: data,
    });

    this.setState({
      id: newId,
    });
  }

  renderAmount() {
    const { value } = this.state;
    return (
      <label htmlFor="valor">
        Valor:
        <input
          type="text"
          name="value"
          id="valor"
          value={ value }
          onChange={ this.handleChange }
          required
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
    const { currency } = this.state;
    const { currencies } = this.props;
    const currenciesCode = [
      // https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c
      ...new Set(Object.values(currencies).map((currencyOption) => currencyOption.code)),
    ];

    return (
      <label htmlFor="currency">
        Moeda:
        <select
          name="currency"
          id="currency"
          value={ currency }
          onChange={ this.handleChange }
          required
        >
          { currenciesCode.map((code, index) => (
            <option key={ index } value={ code }>{ code }</option>
          )) }
        </select>
      </label>
    );
  }

  renderPaymentMethod() {
    const { method } = this.state;
    return (
      <label htmlFor="pagamento">
        Método de pagamento:
        <select
          name="method"
          id="pagamento"
          value={ method }
          onChange={ this.handleChange }
          required
        >
          <option defaultValue="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag:
        <select name="tag" id="tag" value={ tag } onChange={ this.handleChange } required>
          <option defaultValue="alimentacao">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
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
  getCurrencies: () => dispatch(setCurrencies()),
});

AddExpense.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
