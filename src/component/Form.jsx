import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { expensesAPIThunk } from '../actions';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.handleRenderText = this.handleRenderText.bind(this);
    this.handleRenderSelect = this.handleRenderSelect.bind(this);
  }

  onSubmitForm() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleRenderText() {
    const { value, description, currency } = this.state;
    const { currencies } = this.props;
    return (
      <div className="form-header">
        <label htmlFor="valor">
          Valor:
          <input
            onChange={ this.handleChange }
            value={ value }
            className="vlr"
            type="text"
            name="value"
            id="valor"
          />
        </label>
        <label htmlFor="descrição">
          Descrição:
          <input
            onChange={ this.handleChange }
            value={ description }
            type="text"
            name="description"
            id="descrição"
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select
            onChange={ this.handleChange }
            value={ currency }
            name="currency"
            id="moeda"
          >
            {currencies.map(({ code }) => <option key={ code }>{code}</option>)}
          </select>
        </label>
        {this.handleRenderSelect()}
      </div>
    );
  }

  handleRenderSelect() {
    const { method, tag } = this.state;
    return (
      <div className="form-header">
        <label htmlFor="metodoPgt">
          Método de pagamento:
          <select
            onChange={ this.handleChange }
            value={ method }
            name="method"
            id="metodoPgt"
          >
            {['Selecione', 'Dinheiro', 'Cartão de crédito', 'Cartão de débito']
              .map((pay) => <option key={ pay }>{pay}</option>)}
          </select>
        </label>
        <label htmlFor="tag">
          TAG:
          <select
            onChange={ this.handleChange }
            value={ tag }
            name="tag"
            id="tag"
          >
            {['Selecione', 'Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde']
              .map((tagg) => <option key={ tagg }>{tagg}</option>)}
          </select>
        </label>
        <button
          className="add-button"
          type="submit"
          onClick={ () => this.onSubmitForm() }
        >
          Adicionar Despesa
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>{this.handleRenderText()}</div>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => (
  { onSubmit: (payload) => dispatch(expensesAPIThunk(payload)) }
);

export default connect(null, mapDispatchToProps)(Form);
