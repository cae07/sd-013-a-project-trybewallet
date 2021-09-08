import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpenses, fetchCurrencies } from '../../actions';
import Inputs from './Inputs';
import SelectCoin from './SelectCoin';
import SelectPayment from './SelectPayment';
import SelectTag from './SelectTag';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCLick = this.handleCLick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async handleCLick(event) {
    event.preventDefaut();
    const { id } = this.state;
    const { dispatchExpenses, dispatchFetchCoin, wallet: { currencies } } = this.props;
    await dispatchFetchCoin();
    dispatchExpenses({ ...this.state, exchangeRates: currencies });
    this.setState({
      id: id + 1,
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <form className="expense-form">
        <Inputs value={ value } description={ description } onChange={ this.handleChange } />
        <SelectCoin currency={ currency } onChange={ this.handleChange } />
        <SelectPayment method={ method } onChange={ this.handleChange } />
        <SelectTag tag={ tag } onChange={ this.handleChange } />
        <button
          type="button"
          onClick={ this.handleCLick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  dispatchExpenses: PropTypes.func,
  dispatchFetchCoin: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchExpenses: (expenses) => dispatch(addExpenses(expenses)),
  dispatchFetchCoin: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
