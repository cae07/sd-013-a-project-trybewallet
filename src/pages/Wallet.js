import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  Header, FormEditExpenditure, TableExpenses } from '../components';
import FormAdd from '../components/FormAdd';

class Wallet extends React.Component {
  render() {
    const { status } = this.props;
    console.log(status);
    return (
      <div>
        <Header />
        { status.status ? <FormEditExpenditure /> : <FormAdd /> }
        <TableExpenses />
      </div>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({ status: wallet.edit });

Wallet.propTypes = {
  status: PropTypes.bool,
};

Wallet.defaultProps = {
  status: false,
};

export default connect(mapStateToProps)(Wallet);
