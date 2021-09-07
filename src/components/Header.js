import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, totalExpenses = 0 } = this.props;

    return (
      <div>
        <h3
          data-testid="email-field"
        >
          {email}
        </h3>
        <h3
          data-testid="total-field"
        >
          {`Despesa Total: R$ ${totalExpenses}`}
        </h3>
        <h3
          data-testid="header-currency-field"
        >
          BRL
        </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalExpenses: state.wallet.totalExpenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
