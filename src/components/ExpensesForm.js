import React from 'react';
import InputText from './InputText';
import SelectCurrency from './SelectCurrency';
import SelectInput from './SelectInput';
import { payMethodOptions, expenseCategoryOptions } from '../data';

class ExpensesForm extends React.Component {
  render() {
    return (
      <section>
        <form action="">
          <InputText
            name="value"
            changeEvent={ this.handleChange }
            labelValue="Valor"
          />
          <InputText
            name="description"
            changeEvent={ this.handleChange }
            labelValue="Descrição"
          />
          <SelectCurrency />
          <SelectInput
            name="paymentMethod"
            options={ payMethodOptions }
            labelValue="Método de pagamento"
          />
          <SelectInput
            name="expenseCategory"
            options={ expenseCategoryOptions }
            labelValue="Tag"
          />
        </form>
      </section>
    );
  }
}

export default ExpensesForm;
