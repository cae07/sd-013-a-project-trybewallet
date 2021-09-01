import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAddExpense, fetchGetCurrencies } from '../actions/setWallet';

class Wallet extends React.Component {
  constructor() {
    super();
    this.inputAdd = this.inputAdd.bind(this);
    this.selectPagamentAdd = this.selectPagamentAdd.bind(this);
    this.selectTagAdd = this.selectTagAdd.bind(this);
    this.ifMap = this.ifMap.bind(this);
    this.onChange = this.onChange.bind(this);
    this.submitExpense = this.submitExpense.bind(this);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  onChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  inputAdd(type, value, name, id) {
    return (
      <input
        type={ type }
        value={ value }
        name={ name }
        id={ id }
        onChange={ this.onChange }
      />
    );
  }

  selectPagamentAdd() {
    const { method } = this.state;
    return (
      <select value={ method } name="method" id="pagamento" onChange={ this.onChange }>
        <option>Dinheiro</option>
        <option>Cartão de crédito</option>
        <option>Cartão de débito</option>
      </select>
    );
  }

  selectTagAdd() {
    const { tag } = this.state;
    return (
      <select value={ tag } name="tag" id="tag" onChange={ this.onChange }>
        <option>Alimentação</option>
        <option>Lazer</option>
        <option>Trabalho</option>
        <option>Transporte</option>
        <option>Saúde</option>
      </select>
    );
  }

  ifMap(item, index) {
    if (item !== 'USDT') {
      return <option key={ index } value={ item }>{ item }</option>;
    }
  }

  /* calculateTotalExpenses() {
    const { expenses } = this.props;

    return expenses.reduce((acc, { exchangeRates, currency, value }) => {
      const valueConverted = exchangeRates[currency].ask;
      acc += value * valueConverted;
      return acc;
    }, 0).toFixed(2);
  } */

  submitExpense(event) {
    event.preventDefault();
    const { newExpense } = this.props;
    newExpense(this.state);
  }

  render() {
    const { email, currencies, totalExpense = 0 } = this.props;
    const { value, description, currency } = this.state;
    return (
      <div>
        <header>
          <h3 data-testid="email-field">{email}</h3>
          <span data-testid="total-field">{totalExpense}</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <form action="get">
          <label htmlFor="valor">
            Valor:
            {this.inputAdd('text', value, 'value', 'valor')}
          </label>
          <label htmlFor="descricao">
            Descrição:
            {this.inputAdd('text', description, 'description', 'descricao')}
          </label>
          <label htmlFor="$">
            Moeda:
            <select value={ currency } name="currency" id="$" onChange={ this.onChange }>
              {currencies
                && Object.keys(currencies).map((key, index) => this.ifMap(key, index))}
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento:
            {this.selectPagamentAdd()}
          </label>
          <label htmlFor="tag">
            Tag:
            {this.selectTagAdd()}
          </label>
          <button type="submit" onClick={ this.submitExpense }>
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.shape({}).isRequired,
  newExpense: PropTypes.func.isRequired,
  totalExpense: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  totalExpense: state.wallet.totalExpense,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchGetCurrencies()),
  newExpense: (expense) => dispatch(fetchAddExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
