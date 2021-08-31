// React
import React, { Component } from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

class WalletHeader extends Component {
  render() {
    const { props: { userEmail, expensesTotal } } = this;
    return (
      <div className="WalletHeader">
        <span
          data-testid="email-field"
        >
          { userEmail }
        </span>
        <span
          data-testid="total-field"
        >
          { expensesTotal }
        </span>
        <span
          data-testid="header-currency-field"
        >
          BRL
        </span>
      </div>
    );
  }
}

WalletHeader.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expensesTotal: PropTypes.number.isRequired,
};

const mapStateToProps = (store) => ({
  expensesTotal: store.wallet.expensesTotal,
});

export default connect(mapStateToProps, null)(WalletHeader);
