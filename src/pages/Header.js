import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Header extends React.Component {
  render() {
    const { email, gastos, cambio } = this.props;
    return (
      <div data-testid="email-field">
        { email }
        <div data-testid="total-field">
          { gastos }
        </div>
        <div data-testid="header-currency-field">
          { cambio }
        </div>
      </div>
    );
  }
}

mapStateToProps = (state) => ({
  email: state.user.email,
  gastos: state.wallet.gastos,
  cambio: state.wallet.cambio,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  gastos: PropTypes.number.isRequired,
  cambio: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
