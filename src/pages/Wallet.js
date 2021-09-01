import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';
import Header from '../components/Header';
import EditForm from '../components/EditForm';

class Wallet extends React.Component {
  render() {
    const { isEditing } = this.props;
    return (
      <div>
        <Header />
        { isEditing ? <EditForm /> : <ExpenseForm />}
        <ExpenseTable />
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
