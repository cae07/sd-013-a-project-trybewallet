import React from 'react';

class FormWallet extends React.Component {
  render() {
    return (
      <form>
        <label>
          Valor
              <input type="text" name="value" />
        </label>
        <label>
          Descrição
              <input type="text" name="description" />
        </label>
        <label>
          Moeda
            <select></select>
        </label>
        <label>
          Método de pagamento
            <select>
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
        </label>
        <label>
          Tag
            <select>
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
        </label>
      </form>
    )
  }
}

export default FormWallet;
