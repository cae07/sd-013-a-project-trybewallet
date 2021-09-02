import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { emailUser, totalValue = 0 } = this.props;
    return (
      <div>
        <span data-testid="email-field">
          E-mail:
          { emailUser }
        </span>
        <span data-testid="total-field">
          Despesas:
          { totalValue }
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
  totalValue: state.wallet.total,
});

Header.propTypes = {
  emailUser: propTypes.string.isRequired,
  totalValue: propTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
