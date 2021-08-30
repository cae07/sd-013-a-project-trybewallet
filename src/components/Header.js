import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import expensesToBRL from '../utils/expensesToBRL';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const expensesSum = expensesToBRL(expenses);

    return (
      <header style={ { display: 'flex' } }>
        <h1>Tybewallet</h1>
        <div>
          <strong>
            Email:
          </strong>
          <span data-testid="email-field">
            {email}
          </span>
        </div>

        <div>
          <strong>
            Despesa Total:
          </strong>
          <span data-testid="total-field">
            {expensesSum}
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </div>
      </header>);
  }
}

const mapStateToProps = ({ wallet, user }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  // expenses: PropTypes.arrayOf(PropTypes.number).isRequired,
  expenses: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default connect(mapStateToProps)(Header);
