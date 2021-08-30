import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
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
            {expenses}
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </div>
      </header>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses.reduce((acc, curr) => (acc + curr), 0),
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  // expenses: PropTypes.arrayOf(PropTypes.number).isRequired,
  expenses: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
