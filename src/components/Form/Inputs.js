import PropTypes from "prop-types";
import React, { Component } from 'react';

class Inputs extends Component {
  render() {
    const { value, description, onChange } = this.props;
    return (
      <>
        <label htmlFor="valor">
          Valor
          <input
            type="text"
            id="valor"
            value={ value }
            name="value"
            onChange={ onChange }
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            type="text"
            id="descricao"
            value={ description }
            name="description"
            onChange={ onChange }
          />
        </label>
      </>
    );
  }
}

Inputs.propTypes = {
  description: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default Inputs;
