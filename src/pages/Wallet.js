import React from 'react';
import ExpensesForm from './ExpensesForm';
import Header from './Header';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };
  }

  render() {
    const { results } = this.state;
    // console.log(results);
    return (
      <div>
        <Header />
        <ExpensesForm results={ results } />
      </div>
    );
  }
}

export default Wallet;
