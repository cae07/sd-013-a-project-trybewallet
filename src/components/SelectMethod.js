import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectMethod extends Component {
  render() {
    const {
      onChange,
    } = this.props;

    return (
      <label htmlFor="method">
        Método de pagamento
        <select id="method" onChange={ onChange }>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}

SelectMethod.propTypes = {
  onChange: PropTypes.func,
}.isRequired;

export default SelectMethod;
