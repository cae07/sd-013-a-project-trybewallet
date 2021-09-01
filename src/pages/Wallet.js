import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email, gastos, cambio } = this.props;
    return (
      <div>
        <div data-testid="email-field">
          { email }
        </div>
        <div data-testid="total-field">
          { gastos }
        </div>
        <div data-testid="header-currency-field">
          { cambio }
        </div>
        TrybeWallet
      </div>);
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  gastos: state.wallet.gastos,
  cambio: state.wallet.cambio,
});
export default connect(mapStateToProps, null)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  cambio: PropTypes.string.isRequired,
  gastos: PropTypes.number.isRequired,
};
