import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class InputText extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <>
        <label htmlFor="value">
          Valor
          <input type="number" name="value" id="value" onChange={ onChange } />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" name="description" id="description" onChange={ onChange } />
        </label>
      </>
    );
  }
}

InputText.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default InputText;
