import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MethodInput extends Component {
  render() {
    const { name, handleChange } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select name={ name } id={ name } onChange={ handleChange }>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}

MethodInput.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default MethodInput;
