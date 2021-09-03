import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';
import Header from '../components/Header';
import EditForm from '../components/EditForm';
import '../style/Table.css';
import '../style/Header.css';

class Wallet extends React.Component {
  render() {
    const { isEditing } = this.props;
    return (
      <div className="wallet-container">
        <Header />
        <div className="table-container">
          { isEditing ? <EditForm /> : <ExpenseForm />}
          <ExpenseTable />
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (state) => ({
  isEditing: state.wallet.isEditing,
});

Wallet.defaultProps = {
  isEditing: undefined,
};

Wallet.propTypes = {
  isEditing: PropTypes.bool,
};

export default connect(mapStoreToProps)(Wallet);
