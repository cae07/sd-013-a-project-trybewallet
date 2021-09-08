import React from 'react';

class Wallet extends React.Component {
  render() {
    return (
      <header>
        <span data-testid="email-field"> email </span>
        <span data-testid="total-field"> Dispensa total: 0 </span>
        <span data-testid="header-currency-field"> câmbio </span>
      </header>
    );
  }
}

export default Wallet;
