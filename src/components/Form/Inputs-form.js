import React, { Component } from 'react';

class InputsForm extends Component {
  render() {
    return (
      <>
        <label htmlFor="valor">
          Valor
          <input
            type="text"
            id="valor"
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            type="text"
            id="descricao"
          />
        </label>
      </>
    );
  }
}

export default InputsForm;
