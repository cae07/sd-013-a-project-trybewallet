import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      totalExpenses: 0,
    };
  }

  render() {
    const { userEmail } = this.props;
    const { totalExpenses } = this.state;
    return (
      <div>
        <header>
          <h4 data-testid="email-field">{userEmail}</h4>
          <h4 data-testid="total-field">{totalExpenses}</h4>
          <h4 data-testid="header-currency-field">BRL</h4>
        </header>
      </div>);
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
