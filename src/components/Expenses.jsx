import React from 'react';
import Input from './Input';
import Select from './Select';

class Expenses extends React.Component {
  render() {
    return (
      <section>
        <form>
          <Input
            type="number"
            name="expense-value"
            placeholder="0"
            className="expense-input"
            id="expense-value"
            labelText="Valor"
          />
          <Input
            type="text"
            name="expense-description"
            className="expense-input"
            id="expense-description"
            labelText="Descrição"
          />
          <Select
            name="expense-currency"
            labelText="Moeda"
            id="expense-currency"
          />
          <Select
            name="expense-payment"
            labelText="Método de pagamento"
            id="expense-payment"
            options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          />
          <Select
            name="expense-category"
            labelText="Tag"
            id="expense-category"
            options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          />
        </form>
      </section>
    );
  }
}

export default Expenses;
