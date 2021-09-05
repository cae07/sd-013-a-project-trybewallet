import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddExpense from '../components/AddExpense';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.expensesByAmount = this.expensesByAmount.bind(this);
  }

  expensesByAmount() {
    const { expensesList } = this.props;
    return expensesList
      .map((expense) => (
        Number(expense.value) * Number(expense.exchangeRates[expense.currency].ask)))
      .reduce((acc, curr) => acc + curr, 0);
  }

  render() {
    const { userEmail } = this.props;
    const totalExpenses = this.expensesByAmount();

    return (
      <div>
        <header>
          <p data-testid="email-field">
            Email:
            { userEmail }
          </p>

          <p data-testid="total-field">
            Despesa total:
            { totalExpenses === 0 ? 0 : totalExpenses.toFixed(2) }
          </p>

          <p data-testid="header-currency-field">BRL</p>
        </header>

        <AddExpense />
        <ExpensesTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expensesList: state.wallet.expenses,
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expensesList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
