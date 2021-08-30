// React
import React, { Component } from 'react';

// PropTypes
import PropTypes from 'prop-types';

class WalletHeader extends Component {
  render() {
    const { props: { userEmail } } = this;
    return (
      <div className="WalletHeader">
        <span
          data-testid="email-field"
        >
          { userEmail }
        </span>
        <span
          data-testid="total-field"
        >
          0
        </span>
        <span
          data-testid="header-currency-field"
        >
          BRL
        </span>
      </div>
    );
  }
}

WalletHeader.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default WalletHeader;
