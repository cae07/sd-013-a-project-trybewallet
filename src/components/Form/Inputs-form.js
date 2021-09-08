import PropTypes from 'prop-types';
import React, { Component } from 'react';

class InputsForm extends Component {
  render() {
    const {
      inputValue,
      inputDescription,
      onChange } = this.props;

    return (
      <>
        <label htmlFor="valor">
          Valor
          <input
            type="text"
            name="value"
            value={ inputValue }
            onChange={ onChange }
            id="valor"
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            type="text"
            name="description"
            value={ inputDescription }
            onChange={ onChange }
            id="descricao"
          />
        </label>
      </>
    );
  }
}

InputsForm.propTypes = {
  inputDescription: PropTypes.string,
  inputValue: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default InputsForm;
