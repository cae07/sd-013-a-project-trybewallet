import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  calculadora(array) {
    const lailso = array.map((cash) => (Number(cash.exchangeRates[cash.currency].ask) * Number(cash.value)));
    const yuri = lailso
      .reduce((accmulator, currentValue) => accmulator + currentValue, 0);
    return yuri.toFixed(2);
  }
  // feito com ajuda do meu grande amigo lailson

  render() {
    const { infoHeaderEmail, moeda, despesaTotal } = this.props;
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
          { this.calculadora(despesaTotal) }
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
  moeda: PropTypes.string,
};

Header.defaultProps = {
  moeda: 'BRL',
};

const mapStateToProps = (state) => ({
  infoHeaderEmail: state.user.email,
  despesaTotal: state.wallet.expenses,
  moeda: state.wallet.currencies.code,
  valor: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
