import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputsForm extends Component {
  render() {
    const { value, description, onChange } = this.props;
    return (
      <div>
        <label htmlFor="value">
          Valor
          <input
            id="value"
            name="value"
            value={ value }
            onChange={ onChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            id="description"
            name="description"
            value={ description }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

InputsForm.propTypes = {
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputsForm;
