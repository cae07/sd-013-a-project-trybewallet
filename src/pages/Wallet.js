import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ExpensesForm from '../components/ExpensesForm';
import ExpensesTable from '../components/ExpensesTable';
import EditExpensesForm from '../components/EditExpensesForm';

class Wallet extends React.Component {
  render() {
    const { editIsCalled } = this.props;

    return (
      <div>
        <Header />
        { editIsCalled ? <EditExpensesForm /> : <ExpensesForm /> }
        <ExpensesTable />
      </div>
    );
  }
}

Wallet.propTypes = {
  editIsCalled: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  editIsCalled: state.wallet.edit,
});

export default connect(mapStateToProps, null)(Wallet);
