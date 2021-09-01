import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputValor extends Component {
  render() {
    const { onChange, valor } = this.props;
    return (
      <div>
        <label
          htmlFor="input-valor"
        >
          Valor
          <input
            type="text"
            id="input-valor"
            value={ valor }
            name="value"
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

InputValor.propTypes = {
  onChange: PropTypes.func.isRequired,
  valor: PropTypes.number.isRequired,
};

export default InputValor;
