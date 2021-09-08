import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      expensesArray: [],
    };
    this.handleAddExpense = this.handleAddExpense.bind(this);
    this.handleDelExpense = this.handleDelExpense.bind(this);
  }

  componentDidMount() {
    const { expenses } = this.props;
    expenses.map((expense) => {
      const { id, value, currency, exchangeRates } = expense;
      const currencyRate = (exchangeRates[currency]).ask;
      const lastExpense = value * currencyRate;
      this.setState((prevState) => ({
        total: prevState.total + lastExpense,
        expensesArray: [...prevState.expensesArray, { id, lastExpense }],
      }));
    });
  }

  componentDidUpdate(prevProps) {
    const { expenses } = this.props;
    if (expenses.length > prevProps.expenses.length) {
      this.handleAddExpense();
    }
    if (expenses.length < prevProps.expenses.length) {
      this.handleDelExpense();
    }
  }

  handleAddExpense() {
    const { expenses } = this.props;
    const NEW_EXPENSE_INDEX = expenses.length - 1; // última despesa adicionada
    const { id, value, currency, exchangeRates } = expenses[NEW_EXPENSE_INDEX];
    const currencyRate = (exchangeRates[currency]).ask;
    const lastExpense = value * currencyRate;
    this.setState((prevState) => ({
      total: prevState.total + lastExpense,
      expensesArray: [...prevState.expensesArray, { id, lastExpense }],
    }));
  }

  handleDelExpense() {
    const { expenseDeletedID } = this.props;
    console.log(typeof expenseDeletedID);
    const { expensesArray } = this.state;
    const updateExpenses = expensesArray.filter(({ id }) => id !== expenseDeletedID);
    const deletedExpense = expensesArray.find(({ id }) => id === expenseDeletedID);
    const subExpense = deletedExpense !== undefined ? deletedExpense.lastExpense : 0;
    this.setState((prevState) => ({
      total: prevState.total - subExpense,
      expensesArray: updateExpenses,
    }));
  }

  render() {
    const { email } = this.props;
    const { total } = this.state;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ total }</p>
        <p data-testid="header-currency-field">{`BRL ${total}`}</p>
      </header>
    );
  }
}
const mapStateToProps = ({
  user: { email },
  wallet: { expenses, expenseDeletedID },
}) => ({
  email,
  expenses,
  expenseDeletedID,
});
Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  expenseDeletedID: PropTypes.number.isrequired,
};
export default connect(mapStateToProps, null)(Header);
