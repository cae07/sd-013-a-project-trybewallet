import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../form';

class Wallet extends React.Component {
  totalSum() {
    let soma = 0;
    const { expenses } = this.props;
    console.log(expenses);
    expenses.forEach(({ value, currency, exchangeRates }) => {
      soma += (Number(value) * Number(exchangeRates[currency].ask));
    });
    return soma;
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        TrybeWallet
        <header>
          <p data-testid="email-field">
            Email:
            { email }
          </p>
          <p data-testid="total-field">
            Despesa total:
            {this.totalSum()}
          </p>
          <p data-testid="header-currency-field">
            Cambio:
            BRL
          </p>
        </header>
        <Form />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
