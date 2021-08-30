import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletAddForm extends Component {
  render() {
    const { userEmail, total } = this.props;
    return (
      <div>{`${userEmail}, %${total}`}</div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  total: state.wallet.total,
});

export default connect(mapStateToProps, null)(WalletAddForm);

WalletAddForm.propTypes = {
  userEmail: PropTypes.string.isRequired,
  total: PropTypes.number,
};

WalletAddForm.defaultProps = {
  total: 0,
};
