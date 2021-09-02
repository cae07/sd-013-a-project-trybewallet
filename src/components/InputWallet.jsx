import React, { Component } from 'react';

class InputWallet extends Component {
  render() {
    return (
      <div>
        <label htmlFor="valor">
          Valor
          <input type="text" name="valor" id="valor" />
        </label>
        <label htmlFor="valor">
          Descrição
          <input type="text" name="valor" id="descricao" />
        </label>
      </div>
    );
  }
}

export default InputWallet;
