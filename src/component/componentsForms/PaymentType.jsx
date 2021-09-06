import React from 'react';
import PropTypes from 'prop-types';

class PaymentType extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label htmlFor="input-payment">
        Método de pagamento
        <select
          onChange={ onChange }
          name="method"
          value={ value }
          id="input-payment"
        >
          <option value="">escolha</option>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

PaymentType.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default PaymentType;
