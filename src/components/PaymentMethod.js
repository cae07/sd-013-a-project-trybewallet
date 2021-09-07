import React from 'react';
import PropTypes from 'prop-types';

class PaymentMethod extends React.Component {
  render() {
    const { handleChange, value = '' } = this.props;
    const everyMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
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
          <option value="" disabled selected>Escolha</option>
          {
            everyMethod.map((method, index) => <option key={ index }>{method}</option>)
          }
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
