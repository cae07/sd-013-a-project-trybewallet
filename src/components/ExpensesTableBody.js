// React
import React, { Component } from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';

class ExpensesTableBody extends Component {
  constructor(props) {
    super(props);

    this.deleteExpense = this.deleteExpense.bind(this);
  }

  deleteExpense(id) {
    const { props: { deleteExpenseDispatcher } } = this;
    deleteExpenseDispatcher(id);
  }

  render() {
    const { props: { expenses } } = this;
    return (
      <tbody>
        {expenses
          .map(({ id, description, tag, method, value, exchangeRates, currency }) => (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{exchangeRates[currency].name.split('/')[0]}</td>
              <td>
                {`${parseFloat(exchangeRates[currency].ask).toFixed(2)}`}
              </td>
              <td>
                {`${(exchangeRates[currency].ask * value).toFixed(2)}`}
              </td>
              <td>Real</td>
              <td>
                <button
                  onClick={ () => this.deleteExpense(id) }
                  data-testid="delete-btn"
                  type="button"
                >
                  Apagar
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    );
  }
}

ExpensesTableBody.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpenseDispatcher: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  expenses: store.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpenseDispatcher: (payload) => dispatch(deleteExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTableBody);
