import React from 'react';

class WalletInput extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="number" name="" id="valor" />
        </label>

        <label htmlFor="moeda">
          Moeda:
          <select name="moeda" id="moeda">
            <option value="real">Real</option>
          </select>
        </label>

        <label htmlFor="pagamentos">
          Método de pagamento:
          <select name="pagamentos" id="pagamentos">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>

        <label htmlFor="descricao">
          Descrição:
          <input type="text" name="" id="descricao" />
        </label>
      </form>
    );
  }
}

export default WalletInput;
