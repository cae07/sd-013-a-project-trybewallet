import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { myLogin: { email }, myStore } = this.props;

    return (
      <div className="header-wallet">
        <span id="header-section" data-testid="email-field">{ email }</span>
        <div className="p-header">
          <p
            id="header-section"
            className="brl"
            data-testid="header-currency-field"
          >
            BRL
          </p>
          <p
            id="header-section"
            data-testid="total-field"
            className="total-header"
          >
            {myStore.reduce(
              (prev, curr) => (
                prev + (Number(curr.value) * (curr.exchangeRates[curr.currency].ask))
              ), 0,
            ).toFixed(2)}
          </p>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  myLogin: PropTypes.objectOf(PropTypes.shape({
    email: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  myLogin: state.user,
  myStore: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
