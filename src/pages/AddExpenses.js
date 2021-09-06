/* import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { sendExpenses } from '../actions';
import ExpensesForm from './ExpensesForm';
/* import PropTypes from 'prop-types';

class AddExpenses extends React.Component {
  constructor() {
    super();
    this.state = {
      /* estado: '',
    };
  }

  sumExpenses() {
    const { expenses } = this.props;
    let count = 0;
    expenses.forEach(({ value, currency, exchangeRates }) => {
      if (exchangeRates[currency]) {
        count += (Number(value) * Number(exchangeRates[currency].ask));
        return count;
      }
      return count;
    });
    return count.toFixed(2);
  }

  render() {
    return (
      <div>
        <ExpensesForm />
        <button type="button">
          Adicionar despesa
        </button>
      </div>
    );
  }
}

AddExpenses.propTypes = {
  expenses: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchexpenses: (expenses) => dispatch(sendExpenses(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenses);
 */
