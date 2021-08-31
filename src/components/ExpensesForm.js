import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputText from './InputText';
import SelectCurrency from './SelectCurrency';
import SelectInput from './SelectInput';
import { payMethodOptions, expenseCategoryOptions } from '../data';
import { getCurrencies } from '../actions';

class ExpensesForm extends React.Component {
  componentDidMount() {
    const { populateCoins } = this.props;
    populateCoins();
  }

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

ExpensesForm.propTypes = {
  populateCoins: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  populateCoins: () => dispatch(getCurrencies()),
});

export default connect(null, mapDispatchToProps)(ExpensesForm);
