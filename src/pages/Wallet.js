import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { setExpense } from '../actions';
import Expense from '../components/Expense';
import Header from '../components/Header';

class Wallet extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="wallet">
        <Header />
        <Expense />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchExpense: (expense) => dispatch(setExpense(expense)),
});

export default connect(null, mapDispatchToProps)(Wallet);
