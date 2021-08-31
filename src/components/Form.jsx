import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor:
            {' '}
            <input name="valor" id="valor" type="number" />
          </label>
          <label htmlFor="descrição">
            Descrição:
            {' '}
            <input name="descrição" id="descrição" type="text" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            {' '}
            <select name="moeda" id="moeda">
              <option value="EMBREVE">EM BREVE</option>
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento:
            {' '}
            <select>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão">Cartão de crédito</option>
              <option value="CartãoDebito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            {' '}
            <select name="tag" id="tag">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
