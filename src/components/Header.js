import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { email } = this.props;

    const valorTotal = (Math.round(acumulado * 100) / 100).toFiexed(2);

    return (
      <header className="mainHeader">
        <h1>FraitzWallet</h1>
        <div>
          <span data-testid="total-field">
            Despesa total: R$
            { valorTotal }
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
          <span data-testid="email-field">
            Email:
            { email }
          </span>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
