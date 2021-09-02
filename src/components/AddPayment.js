import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectMethod from './SelectMethod';
import SelectCurrency from './SelectCurrency';
import SelectType from './SelectType';
import InputText from './InpuText';
import { fetchAwsome, addPayment } from '../actions';

class AddPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      tag: 'Alimentação',
      type: 'Dinheiro',
      currency: 'USD',
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange({ target: { value, id } }) {
    this.setState({ [id]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { savePayment } = this.props;
    savePayment(addPayment, this.state);
  }

  render() {
    const {
      value,
      description,
      currency,
      tag,
      type,
    } = this.state;

    const { currencies } = this.props;

    return (
      <form onSubmit={ this.handleSubmit }>
        <InputText
          value={ value }
          label="Valor"
          id="value"
          type="text"
          placeholder="$0,00"
          onChange={ this.onChange }
        />
        <InputText
          value={ description }
          label="Descrição"
          id="description"
          type="text"
          placeholder="Descrição do pgto."
          onChange={ this.onChange }
        />
        <SelectCurrency
          value={ currency }
          currencies={ currencies }
          onChange={ this.onChange }
        />
        <SelectMethod value={ type } onChange={ this.onChange } />
        <SelectType value={ tag } onChange={ this.onChange } />
        <button type="submit">
          Adicionar despesa
        </button>
      </form>
    );
  }
}

AddPayment.propTypes = {
  addPayment: PropTypes.func,
  currencies: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  savePayment: (action, state) => dispatch(fetchAwsome(action, state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPayment);
