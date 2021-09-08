import React from 'react';
import Input from './Input';

class Forms extends React.Component {
  render() {
    return (
      <div>
        <form>
          <Input
            label="Valor"
          />
          <Input
            label="Descrição"
          />
            <label htmlFor="select-coin">
                Moeda
                <select required="required" id="select-coin">
                    <option name="Moeda">
                    Selecione a moeda
                    </option>
                </select>
            </label>

            <label htmlFor="select-payment">
            Método de pagamento
            <select required="required" id="select-payment">
                <option name="Dinheiro">Dinheiro</option>
                <option name="Credito">Cartão de crédito</option>
                <option name="Debito">Cartão de débito</option>
            </select>
            </label>

            <label htmlFor="select-category">
            Tag
            <select required="required" id="select-category">
                <option name="Alimentação">Alimentação</option>
                <option name="Lazer">Lazer</option>
                <option name="Trabalho">Trabalho</option>
                <option name="Transporte">Transporte</option>
                <option name="Saúde">Saúde</option>
            </select>
            </label>
        </form>
      </div>
    );
  }
}

export default Forms;