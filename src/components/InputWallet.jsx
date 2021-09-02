import React, { Component } from 'react';

class InputWallet extends Component {
  render() {
    return (
      <div>
        <label htmlFor="valor">
          Valor:
          <input type="text" name="valor" className="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" name="descricao" className="descricao" />
        </label>
      </div>
    );
  }
}

export default InputWallet;
