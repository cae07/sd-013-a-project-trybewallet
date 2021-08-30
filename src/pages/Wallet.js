import React from 'react';
import FormExpenditure from '../components/FormExpenditure';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormExpenditure />
      </div>
    );
  }
}

export default Wallet;
