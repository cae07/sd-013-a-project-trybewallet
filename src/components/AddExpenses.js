import React from 'react';
import NoSelectForm from './NoSelectForm';
import SelectCurrency from './SelectCurrency';
import SelectPayment from './SelectPayment';
import SelectTag from './SelectTag';

class AddExpenses extends React.Component {
  render() {
    return (
      <div>
        <NoSelectForm />
        <SelectCurrency />
        <SelectPayment />
        <SelectTag />
      </div>
    );
  }
}

export default AddExpenses;
