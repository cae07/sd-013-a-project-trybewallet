import React from 'react';
import PropTypes from 'prop-types';

class PaymentMethod extends React.Component {
  render() {
    const { handleChange, value = '' } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          label="method"
          id="method"
          name="method"
          value={ value }
          onChange={ handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de Crédito</option>
          <option>Cartão de Débito</option>
        </select>
      </label>
    );
  }
}

PaymentMethod.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default PaymentMethod;
