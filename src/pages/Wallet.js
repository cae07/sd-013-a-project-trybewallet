import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  Header, TableExpenses } from '../components';
import FormAdd from '../components/FormAdd';
import FormEdit from '../components/FormEdit';

class Wallet extends React.Component {
  render() {
    const { edit } = this.props;

    return (
      <div>
        <Header />
        { edit.status ? <FormEdit /> : <FormAdd /> }
        <TableExpenses />
      </div>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  edit: wallet.edit,
});

Wallet.propTypes = {
  edit: PropTypes.shape({
    status: PropTypes.bool,
  }),
};

Wallet.defaultProps = {
  edit: { status: false },
};
export default connect(mapStateToProps)(Wallet);
