import React from 'react';
import Forms from '../components/Forms';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          TrybeWallet
        </div>
        <div>
          <Forms />
        </div>
      </div>
    )
  }
}

export default Wallet;
