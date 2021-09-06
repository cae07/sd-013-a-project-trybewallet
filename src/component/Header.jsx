import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { myState, myWallet } = this.props;
    return (
      <>
        <span data-testid="email-field">{ myState.email }</span>
        <p data-testid="total-field">{ myWallet }</p>
        <p data-testid="header-currency-field">BRL</p>
      </>
    );
  }
}

Header.propTypes = {
  myState: PropTypes.objectOf(PropTypes.shape).isRequired,
  myWallet: PropTypes.number,
};

Header.defaultProps = {
  myWallet: 0,
};

const mapStateToProps = (state) => ({
  myState: state.user,
  myWallet: state.wallet.total,
});

export default connect(mapStateToProps)(Header);
