import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CurrencyInput from './CurrencyInput';
import DescriptionInput from './DescriptionInput';
import ExpensesInput from './ExpensesInput';
import PaymentMethod from './PaymentMethod';
import ValueInput from './ValueInput';
import ExpensesTable from './ExpensesTable';

class HeaderForm extends Component {
  constructor() {
    super();
    this.handleChangeCallBack = this.handleChangeCallBack.bind(this);
    this.submitFormCallBack = this.submitFormCallBack.bind(this);
  }

  handleChangeCallBack(e, option = false) {
    const { handleChange } = this.props;
    handleChange(e, option);
  }

  submitFormCallBack(e) {
    e.preventDefault();
    const { submitForm } = this.props;
    submitForm();
  }

  render() {
    const { expenses: { value, description,
      currency, paymentMethod, kindExpense } } = this.props;
    return (
      <form>
        <ValueInput handleChange={ this.handleChangeCallBack } valueCost={ value } />
        <DescriptionInput
          handleChange={ this.handleChangeCallBack }
          descriptionValue={ description }
        />
        <CurrencyInput
          currencyValue={ currency }
          handleChange={ this.handleChangeCallBack }
        />
        <PaymentMethod
          paymentMethod={ paymentMethod }
          handleChange={ this.handleChangeCallBack }
        />
        <ExpensesInput
          kindExpense={ kindExpense }
          handleChange={ this.handleChangeCallBack }
        />
        <button
          type="submit"
          onClick={ (e) => this.submitFormCallBack(e) }
        >
          Adicionar despesa
        </button>
        <ExpensesTable />
      </form>
    );
  }
}

HeaderForm.propTypes = {
  expenses: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    description: PropTypes.string,
    currency: PropTypes.string,
    paymentMethod: PropTypes.string,
    kindExpense: PropTypes.string,
  }).isRequired,
  submitForm: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default HeaderForm;
