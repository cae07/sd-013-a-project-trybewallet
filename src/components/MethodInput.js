import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MethodInput extends Component {
  render() {
    const { name, handleChange, value = '' } = this.props;
    const methodArray = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          name={ name }
          id={ name }
          onChange={ handleChange }
          defaultValue={ value }
        >
          {
            methodArray.map((item, index) => <option key={ index }>{item}</option>)
          }
        </select>
      </label>
    );
  }
}

MethodInput.defaultProps = {
  value: undefined,
};

MethodInput.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default MethodInput;
