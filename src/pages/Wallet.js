import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getApiInfo, addExpense } from '../actions';
import ContentTable from '../components/ContentTable';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  getTotalValue() {
    const { props: { expenses } } = this;
    if (expenses.length >= 1) {
      const total = expenses.reduce((acc, curr) => {
        const { value, currency = 'USD', exchangeRates } = curr;
        const { ask } = exchangeRates[currency];
        const expense = Number(value) * Number(ask);
        return expense + acc;
      }, 0);
      return Math.round((total + Number.EPSILON) * 100) / 100;
    }
    return 0;
  }

  handleChange({ id, value }) {
    this.setState({
      [id]: value,
    });
  }

  async handleClick() {
    const { props: {
      addToExpenses, expenses, getCurrency, currencies }, state } = this;
    await getCurrency();
    addToExpenses({ ...state, exchangeRates: currencies, id: expenses.length });
  }

  filterCurrencies() {
    const { currencies } = this.props;
    return currencies.map((currency) => currency.code);
  }

  render() {
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const { props: { currencies }, handleChange, handleClick } = this;
    const currenciesArray = Object.keys(currencies);
    const totalValue = this.getTotalValue();
    const { value, description, currency, method, tag } = this.state;
    return (
      <>
        <Header totalValue={ totalValue } />
        <form action="">
          <label htmlFor="value">
            Valor
            <input
              type="text"
              value={ value }
              id="value"
              onChange={ (e) => handleChange(e.target) }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              value={ description }
              id="description"
              onChange={ (e) => handleChange(e.target) }
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency" value={ currency } onChange={ (e) => handleChange(e.target) }>
              {currenciesArray.map((curr, i) => (
                <option key={ i }>{curr}</option>)) }
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select id="method" value={ method } onChange={ (e) => handleChange(e.target) }>
              {methods.map((method, i) => (
                <option key={ i } value={ method }>{method}</option>))}
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag" value={ tag } onChange={ (e) => handleChange(e.target) }>
              {tags.map((cat, i) => <option key={ i } value={ cat }>{cat}</option>)}
            </select>
          </label>
          <input type="button" value="Adicionar despesa" onClick={ () => handleClick() } />
        </form>
        <ContentTable />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(getApiInfo()),
  addToExpenses: (payload) => dispatch(addExpense(payload)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  getCurrency: PropTypes.func.isRequired,
  addToExpenses: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
