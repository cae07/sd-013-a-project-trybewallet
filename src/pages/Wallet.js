import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../component/Form';
import { currencyAPIThunk } from '../actions/index';

class Wallet extends React.Component {
  constructor() {
    super();
    this.exchangeRatesMath = this.exchangeRatesMath.bind(this);
  }

  componentDidMount() {
    const { currencyAPI } = this.props;
    currencyAPI();
  }

  exchangeRatesMath() {
    const { expenses } = this.props;
    return expenses.reduce((acc, expense) => {
      const { currency, exchangeRates } = expense;
      const convert = exchangeRates[currency].ask;
      acc += expense.value * convert;
      return acc;
    }, 0).toFixed(2);
  }

  render() {
    const { userEmail, currencies, expenses } = this.props;
    return (
      <div>
        <header className="wallet-header">
          <p data-testid="header-currency-field">BRL</p>
          <span data-testid="email-field">{ userEmail }</span>
          <p data-testid="total-field">
            Total gasto R$: _
            { this.exchangeRatesMath() }
          </p>
        </header>
        <Form currencies={ currencies } />
        <div className="img2">
          {expenses.map((item, index) => (
            <div key={ index } className="eraLi">
              <div>{item.valor}</div>
              <div>{item.descrição}</div>
              <div>{item.moeda}</div>
              <div>{item.metodoPgt}</div>
              <div>{item.tag}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  currencyAPI: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  currencyAPI: () => dispatch(currencyAPIThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
