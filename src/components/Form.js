import React, { Component } from 'react';
import Select from './Select';

class Form extends Component {
  render() {
    return (
      <form>
        <label
          htmlFor="valor"
        >
          Valor
          <input
            type="text"
            id="valor"
            name="valor"
          />
        </label>
        <Select />
        <label
          htmlFor="descricao"
        >
          Descrição
          <input
            type="text"
            id="descricao"
            name="descricao"
          />
        </label>
      </form>
    );
  }
}

export default Form;
