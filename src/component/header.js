import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  totalPrice() {
    const { expenses } = this.props;
    let sum = 0;
    expenses.forEach(({ value, currency, exchangeRates }) => {
      sum += value * exchangeRates[currency].ask;
    });

    return parseFloat(sum).toFixed(2);
  }

  render() {
    const { user } = this.props;
    return (
      <>
        <p data-testid="email-field">{ `Usuário: ${user}` }</p>
        <p>
          Despesas Totais: R$
          <span data-testid="total-field">{ this.totalPrice() }</span>
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  currency: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  user: propTypes.string,
  expenses: propTypes.arrayOf,
}.isRequired;

export default connect(mapStateToProps, null)(Header);
