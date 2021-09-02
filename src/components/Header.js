import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAwsome, getCurrencies } from '../actions';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    const { email, totalAmount } = this.props;

    return (
      <header className="mainHeader">
        <h1>FraitzWallet</h1>
        <div>
          <span data-testid="total-field">
            Despesa total: R$
            { parseFloat(totalAmount).toFixed(2) }
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
          <span data-testid="email-field">
            Email:
            { email }
          </span>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  fetchCurrencies: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalAmount: state.wallet.expenses
    .reduce((
      accumulator,
      { value, currency, exchangeRates },
    ) => accumulator + (parseFloat(exchangeRates[currency].ask) * value), 0),
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchAwsome(getCurrencies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
