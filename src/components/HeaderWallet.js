import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HeaderWallet extends React.Component {
  render() {
    const { user, sum } = this.props;
    const INITIAL_VALUE = 0;
    return (
      <header>
        <h1>TrybeWallet</h1>
        <form>
          <div>
            Email:
            <span data-testid="email-field">{ user.email }</span>
          </div>
          <div data-testid="header-currency-field">
            Despesa Total:
            <span
              data-testid="total-field"
            >
              { sum > INITIAL_VALUE ? sum : INITIAL_VALUE }
            </span>
            {' '}
            BRL
          </div>
        </form>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  sum: state.wallet.sum,
});

HeaderWallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
  sum: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(HeaderWallet);
