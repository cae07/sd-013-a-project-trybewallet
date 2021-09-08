import PropTypes from 'prop-types';
import React from 'react';

class Payment extends React.Component {
  render() {
    const { method, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="select-payment">
          Método de pagamento
          <select
            required="required"
            id="select-payment"
            name="method"
            onChange={ handleChange }
            value={ method }
          >
            <option name="Dinheiro">Dinheiro</option>
            <option name="Credito">Cartão de crédito</option>
            <option name="Debito">Cartão de débito</option>
          </select>
        </label>
      </div>
    );
  }
}

Payment.propTypes = {
  handleChange: PropTypes.func,
  method: PropTypes.string,
}.isRequired;

export default Payment;
