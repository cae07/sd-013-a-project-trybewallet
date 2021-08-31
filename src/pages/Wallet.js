import React from 'react';
import FormAddExpenditure from '../components/FormAddExpenditure';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormAddExpenditure />
      </div>
    );
  }
}

export default Wallet;
