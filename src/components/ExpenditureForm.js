import React from 'react';
import Input from './Input';
import SelectCoin from './SelectCoin';
import SelectPayment from './SelectPayment';
import SelectCategory from './SelectCategory';

class ExpenditureForm extends React.Component {
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
          <SelectCoin />
          <SelectPayment />
          <SelectCategory />
        </form>
      </div>
    );
  }
}

export default ExpenditureForm;
