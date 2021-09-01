import React from 'react';
import ExpensesForm from './ExpensesForm';
import Header from './Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ExpensesForm />
      </div>
    );
  }
}

export default Wallet;

// const mapStateToProps = (state) => ({
//   wallet: state,
// });
