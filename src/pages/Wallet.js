import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpensesTable from '../components/ExpensesTable';
import Outgoing from '../components/Outgoing';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.getTotalExpenses = this.getTotalExpenses.bind(this);
  }

  getTotalExpenses() {
    const { expenses } = this.props;
    const total = expenses.reduce((acc, crr) => {
      const { value, currency, exchangeRates } = crr;
      const convertion = Number(value) * (exchangeRates[currency].ask);

      return acc + convertion;
    }, 0);
    return Math.round(total * 100) / 100;
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        TrybeWallet
        <header>
          <img src="" alt="" />
          <p data-testid="email-field">
            Bem vindo
            {email}
            !
          </p>
          <p>
            Despesa total: R$
            <span data-testid="total-field">
              { this.getTotalExpenses() }
            </span>
            <span data-testid="header-currency-field">
              {' '}
              BRL
            </span>
          </p>
        </header>
        <Outgoing />
        <ExpensesTable />
      </div>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Wallet);
