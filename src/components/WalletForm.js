import React from 'react';

class WalletForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="price">
            Valor
            <input type="number" name="price" id="price" />
          </label>

          <label htmlFor="description">
            Descrição
            <input type="text" name="description" id="description" />
          </label>

          <label htmlFor="currency">
            Moeda
            <select name="currency" id="currency">
              <option>
                Vazio
              </option>
            </select>
          </label>

          <label htmlFor="methodOfPayment">
            Método de pagamento
            <select name="methodOfPayment" id="methodOfPayment">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default WalletForm;
