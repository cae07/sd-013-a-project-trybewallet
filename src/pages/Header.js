import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const somarValores = () => {
      let soma = 0;
      if (expenses[0] !== undefined) {
        expenses.forEach(({ value, exchangeRates, currency }) => {
          soma += Number(value) * Number(exchangeRates[currency].ask);
        });
      }
      return soma;
    };
    return (
      <header>
        <h4 data-testid="email-field">{ `Email: ${email}` }</h4>
        <h4
          data-testid="total-field"
        >
          {`Despesas Total: ${somarValores().toFixed(2)}`}
        </h4>
        <h4 data-testid="header-currency-field">BRL</h4>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
