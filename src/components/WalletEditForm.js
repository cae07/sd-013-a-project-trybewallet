import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editExpense, updateTotal } from '../actions';
import { Input, Select, Button } from './form-components';

const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

const editExp = ({ edtExpense, updtTotal }, inputs) => {
  edtExpense(inputs);
  updtTotal();
};

const handleChange = (setInputs, { id, value }) => {
  const key = id.split('-')[0];
  setInputs((state) => ({ ...state, [key]: value }));
};

function WalletEditForm(props) {
  const { expensesList, id, currencies } = props;
  const expense = expensesList.find((exp) => exp.id === id);
  const [inputs, setInputs] = useState(expense);

  return (
    <form className="wallet-edit-form">
      <Input
        label="Valor:"
        id="value-input"
        type="number"
        value={ inputs.value }
        onChange={ ({ target }) => handleChange(setInputs, target) }
      />
      <Select
        label="Moeda:"
        id="currency-input"
        value={ inputs.currency }
        onChange={ ({ target }) => handleChange(setInputs, target) }
        options={ currencies }
      />
      <Select
        label="Método de pagamento:"
        id="method-input"
        value={ inputs.method }
        onChange={ ({ target }) => handleChange(setInputs, target) }
        options={ methods }
      />
      <Select
        label="Tag:"
        id="tag-input"
        value={ inputs.tag }
        onChange={ ({ target }) => handleChange(setInputs, target) }
        options={ tags }
      />
      <Input
        label="Descrição:"
        id="description-input"
        type="text"
        value={ inputs.description }
        onChange={ ({ target }) => handleChange(setInputs, target) }
      />
      <Button
        text="Editar despesa"
        classN="wallet-form-add"
        onClick={ () => editExp(props, inputs) }
      />
    </form>
  );
}

const mapStateToProps = (state) => ({
  expensesList: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  edtExpense: (payload) => dispatch(editExpense(payload)),
  updtTotal: () => dispatch(updateTotal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletEditForm);

WalletEditForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expensesList: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  id: PropTypes.number.isRequired,
};
