import React, { Component } from 'react';
import Proptypes from 'prop-types';

class SelectPay extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <label htmlFor="pay">
        Método de Pagamento
        <select onChange={ onChange } name="method" required="required" id="pay">
          <option name="Dinheiro">Dinheiro</option>
          <option name="Credito">Cartão de crédito</option>
          <option name="Debito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

SelectPay.propTypes = {
  onChange: Proptypes.func,
}.isrequired;

export default SelectPay;
