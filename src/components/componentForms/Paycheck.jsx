import React from 'react';
import PropTypes from 'prop-types';

class Paycheck extends React.Component {
  render() {
    const { paycheck, onChange } = this.props;

    return (
      <label htmlFor="input-paycheck">
        Método de pagamento
        <select
          id="input-paycheck"
          onChange={ onChange }
          value={ paycheck }
          name="paycheck"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

Paycheck.propTypes = {
  paycheck: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Paycheck;
