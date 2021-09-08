import React from 'react';

class Wallet extends React.Component {
  render() {
    // const { email } = this.props;
    return (
      <header>
        <h4 data-testid="email-field">
          email
        </h4>
        <h4 data-testid="total-field">
          despesas
        </h4>
        <h4 data-testid="header-currency-field">
          cambio
        </h4>
      </header>
    );
  }
}

export default Wallet;
