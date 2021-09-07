import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Expense from '../components/Expense';
import EditExpense from '../components/EditExpense';
import Header from '../components/Header';
import TableExpense from '../components/TableExpense';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.editExp = this.editExp.bind(this);
  }

  editExp() {
    const { editExpense } = this.props;
    return editExpense ? <EditExpense /> : <Expense />;
  }

  render() {
    return (
      <div className="wallet">
        <Header />
        {this.editExp()}
        <TableExpense />
      </div>
    );
  }
}

Wallet.propTypes = {
  editExpense: PropTypes.bool.isRequired,
};

const mapStateToProps = (stateStore) => ({
  editExpense: stateStore.wallet.editExpense,
});

export default connect(mapStateToProps, null)(Wallet);
