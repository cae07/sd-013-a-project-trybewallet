import React, { Component } from 'react';

export class InputText extends Component {
  render() {
    return (
      <>
        <label htmlFor="value">
          Valor
          <input type="text" name="value" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" name="description" id="description" />
        </label>
      </>
    );
  }
}

export default InputText;
