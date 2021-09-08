import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMoeda, addExpense } from '../actions';
import SelectMoeda from './SelectMoeda';
import DescriptionExpense from './DescriptionExpense';

class WalletInput extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
    };
  }

  componentDidMount() {
    const { loadMoedas } = this.props;
    loadMoedas();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { addNewExpense } = this.props;
    addNewExpense(this.state);
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" name="value" id="value" onChange={ this.handleChange } />
        </label>
        <DescriptionExpense name="description" handleChange={ this.handleChange } />
        <SelectMoeda currencies={ currencies } handleChange={ this.handleChange } />
        <label htmlFor="method">
          Método de pagamento
          <select name="method" id="method" onChange={ this.handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="submit" onClick={ this.handleSubmit }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadMoedas: () => dispatch(fetchMoeda()),
  addNewExpense: (expense) => dispatch(addExpense(expense)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletInput.defaultProps = {
  currencies: [],
};

WalletInput.propTypes = {
  loadMoedas: PropTypes.func.isRequired,
  addNewExpense: PropTypes.func.isRequired,
  currencies: PropTypes.shape(
    {},
  ),
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletInput);

// Requisito 8 o amigo Vinicius Dyonisio me salvou, esta ajudando muito na adaptacao do redux
