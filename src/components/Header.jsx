import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../css/header.css';

class Header extends Component {
  calculadora(array) {
    const lailso = array.map((cash) => (
      Number(cash.exchangeRates[cash.currency].ask) * Number(cash.value)));
    const yuri = lailso
      .reduce((accmulator, currentValue) => accmulator + currentValue, 0);
    return yuri.toFixed(2);
  }
  // feito com ajuda do meu grande amigo lailson

  render() {
    const { infoHeaderEmail, despesaTotal } = this.props;
    return (
      <div className="container-header">
        <p
          data-testid="email-field"
        >

          { infoHeaderEmail }
        </p>
        <h1>
          invest+
        </h1>
        <p
          data-testid="total-field"
        >
          Sua despesa atual é de : R$
          { this.calculadora(despesaTotal) }
          .
        </p>
        <p
          className="apagar"
          data-testid="header-currency-field"
        >
          Real Brasileiro
        </p>
      </div>
    );
  }
}

Header.propTypes = {
  infoHeaderEmail: PropTypes.string.isRequired,
  despesaTotal: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = (state) => ({
  infoHeaderEmail: state.user.email,
  despesaTotal: state.wallet.expenses,
  valor: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
