import React, { Component } from 'react';
import InputsForm from './Inputs-form';
import SelectCoin from './Select-Coin';
import SelectPayment from './Select-payment';
import SelectTag from './Select-tag';

class Form extends Component {
  render() {
    return (
      <form>
        <InputsForm />
        <SelectCoin />
        <SelectPayment />
        <SelectTag />
      </form>
    );
  }
}

export default Form;
