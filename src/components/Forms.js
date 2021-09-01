import React from 'react';

class Forms extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          valor
          <input name="valor" id="valor" type="text" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" name="descricao" id="descricao" />
        </label>
        <label htmlFor="Moeda">
          Moeda:
          <select name="Moeda" id="Moeda" />
        </label>
        <label htmlFor="Metodo">
          Método de pagamento:
          <select name="Metodo" id="Metodo">
            <option>Dinheiro</option>
            <option>Cartão de crédito </option>
            <option>Cartão de débito </option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag:
          <select name="Tag" id="Tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Forms;
