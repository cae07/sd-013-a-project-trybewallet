import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { infoHeaderEmail, despesaTotal, moeda } = this.props;
    return (
      <div>
        <p
          data-testid="email-field"
        >
          email:
          { infoHeaderEmail }
        </p>
        <p
          data-testid="total-field"
        >
          despesa total:
          { despesaTotal }
        </p>
        <p
          data-testid="header-currency-field"
        >
          moeda:
          { moeda }
        </p>
      </div>
    );
  }
}

Header.propTypes = {
  infoHeaderEmail: PropTypes.string.isRequired,
  despesaTotal: PropTypes.number,
  moeda: PropTypes.string,
};

Header.defaultProps = {
  despesaTotal: 0,
  moeda: 'BRL',
};

const mapStateToProps = (state) => ({
  infoHeaderEmail: state.user.email,
  despesaTotal: state.expenses,
  moeda: state.wallet.currencies.code,
});

export default connect(mapStateToProps)(Header);
