import React from 'react';
import PropTypes from 'prop-types';

class SelectPayment extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <label
        htmlFor="payment"
      >
        Método de pagamento:
        <select
          required
          id="payment"
          onChange={ onChange }
          name="method"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

SelectPayment.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SelectPayment;
