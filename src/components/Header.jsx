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
  }

  componentDidUpdate(prevProps) {
    const { expensesArray } = this.state;
    const { expenses } = this.props;
    console.log('ATUALIZOU', prevProps.expenses, expensesArray);
    if (expenses.length > expensesArray.length) {
      console.log('ENTROU');

      this.handleAddExpense();
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
const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  email,
  expenses,
});
Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default connect(mapStateToProps, null)(Header);
