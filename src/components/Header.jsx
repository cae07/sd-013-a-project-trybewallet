import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);
    const { state: { email } } = this.props;
    const { total: { total } } = this.props;
    this.state = {
      emailWallet: email,
      priceTotal: total,
    };
  }

  render() {
    const { emailWallet, priceTotal } = this.state;
    return (
      <header>
        <div className="header-icon">Trybe Wallet</div>
        <div>
          <span data-testid="email-field">
            Login:
            {' '}
            {emailWallet}
          </span>
        </div>
        <div>
          <span data-testid="total-field">
            {priceTotal}
          </span>
          <span data-testid="header-currency-field">
            {' '}
            BRL
          </span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  state: { email: state.user.email },
  total: { total: state.wallet.total },
});

Header.propTypes = {
  state: PropTypes.shape,
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Header);
