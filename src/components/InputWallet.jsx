import React, { Component } from 'react';

class InputWallet extends Component {
  render() {
    return (
      <div>
        <label>
          Valor
          <input type="text" />
        </label>
        <label>
          Descrição
          <input type="text" />
        </label>
      </div>
    )
  }
}

export default InputWallet;
