import React from 'react';
// import PropTypes from 'prop-types';

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

export default Wallet;
