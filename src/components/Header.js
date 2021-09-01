import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { user, totalExpenses } = this.props;

    return (
      <header>
        <div>
          <p data-testid="email-field">{ user }</p>
          <p data-testid="total-field">
            { totalExpenses.length === 0 ? 0
              : totalExpenses
                .reduce((acc, { value, currency, exchangeRates }) => (
                  acc + Number(value) * Number(Object
                    .entries(exchangeRates)
                    .find(([name]) => name === currency)[1].ask)
                ), 0) }
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  totalExpenses: state.wallet.expenses,
});

Header.propTypes = {
  user: PropTypes.string.isRequired,
  totalExpenses: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default connect(mapStateToProps, null)(Header);
