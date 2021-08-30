import React from 'react';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <input type="text" data-testid="email-input" />
        <input type="text" data-testid="password-input" />
        <button type="button">Entrar</button>
      </div>);
  }
}

export default Wallet;
