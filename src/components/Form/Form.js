import React, { Component } from 'react';
import Inputs from './Inputs';
import SelectCoin from './SelectCoin';
import SelectPayment from './SelectPayment';
import SelectTag from './SelectTag';

class Form extends Component {
  render() {
    return (
      <form className="expense-form">
        <Inputs />
        <SelectCoin />
        <SelectPayment />
        <SelectTag />
      </form>
    );
  }
}

export default Form;
