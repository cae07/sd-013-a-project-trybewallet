import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputValor extends Component {
  render() {
    const { onChange, valor } = this.props;
    return (
      <div className="input-form">
        <label
          htmlFor="input-valor"
        >
          Valor :
          <input
            type="text"
            id="input-valor"
            value={ valor }
            name="value"
            onChange={ onChange }
            placeholder="digite um valor..."
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
