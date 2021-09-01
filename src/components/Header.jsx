import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);
    const { state: { email } } = this.props;
    this.state = {
      emailWallet: email,
      price: 0,
      moeda: 'BRL',
    };
  }

  render() {
    const { emailWallet, price, moeda } = this.state;
    return (
      <header>
        <div className="header-icon">Trybe Wallet</div>
        <div>
          <span data-testid="email-field">
            Email:
            {' '}
            {emailWallet}
          </span>
        </div>
        <div>
          <span data-testid="total-field">
            Despesas Totais :
            {' '}
            {price}
            {' '}
          </span>
          <span data-testid="header-currency-field">
            {moeda}
          </span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  state: { email: state.user.email },
});

Header.propTypes = {
  state: PropTypes.shape,
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Header);
