import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectMethod from './SelectMethod';
import SelectCurrency from './SelectCurrency';
import SelectType from './SelectType';
import InputText from './InpuText';
import { editPayment } from '../actions';

class EditPayment extends Component {
  constructor(props) {
    super(props);

    const { id, expenses } = this.props;
    const thisPayment = expenses.find((expense) => expense.id === id);
    const { value, description, currency, method, tag } = thisPayment;

    this.state = {
      value,
      description,
      tag,
      method,
      currency,
      id,
    };

    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onChange({ target: { value, id } }) {
    this.setState({ [id]: value });
  }

  handleClick() {
    const { edit, onSubmit, expenses } = this.props;
    const { id } = this.state;
    const filtered = expenses.find((payment) => payment.id === id);
    edit({ ...this.state, exchangeRates: filtered.exchangeRates });
    onSubmit();
  }

  render() {
    const {
      value,
      description,
      currency,
      tag,
      method,
    } = this.state;

    const { currencies } = this.props;

    return (
      <form>
        <InputText
          value={ value }
          label="Valor"
          id="value"
          name="value"
          type="text"
          placeholder="$0,00"
          onChange={ this.onChange }
        />
        <InputText
          value={ description }
          label="Descrição"
          id="description"
          name="description"
          type="text"
          placeholder="Descrição do pgto."
          onChange={ this.onChange }
        />
        <SelectCurrency
          value={ currency }
          currencies={ currencies }
          onChange={ this.onChange }
        />
        <SelectMethod value={ method } onChange={ this.onChange } />
        <SelectType value={ tag } onChange={ this.onChange } />
        <button type="button" onClick={ this.handleClick }>
          Editar despesa
        </button>
      </form>
    );
  }
}

EditPayment.propTypes = {
  idToEdit: PropTypes.number,
  addPayment: PropTypes.func,
  currencies: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  edit: (payment) => dispatch(editPayment(payment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPayment);
