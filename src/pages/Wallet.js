import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { state } = this.props;
    const { user: { email } } = state;
    return (
      <div>
        <header>
          <h2 data-testid="email-field">{ email }</h2>
          <h3 data-testid="total-field">0</h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
      </div>
    );
  }
}

Wallet.propTypes = {
  state: PropTypes.shape().isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(Wallet);
