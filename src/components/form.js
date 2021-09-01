import React from 'react';

class Form extends React.Component {
  render(){
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" id="valor" />
        </label>

        <label>
          Descrição
          <input  />
        </label>

        <label>
          Moeda
          <select>

          </select>
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
    );
  }
}

export default Form;
