import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { walletEmail } = this.props;

    return (
      <div>
        <header>
          <h4 data-testid="email-field">{`Email: ${walletEmail}`}</h4>
          <h4 data-testid="total-field">{`Despesa Total: R$ ${0}`}</h4>
          <h4 data-testid="header-currency-field">BRL</h4>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  walletEmail: state.user.email,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  walletEmail: PropTypes.string.isRequired,
};
