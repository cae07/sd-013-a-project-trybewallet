import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { convertValue, valueCambio } from '../actions';
import ButtonAdd from './ButtonAdd';

class FormWallet extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSavedAdd = this.onSavedAdd.bind(this);
  }

  componentDidMount() {
    const { fetchAPI } = this.props;
    fetchAPI();
  }

  // Adicionando as despesas no store com o click do botão
  onSavedAdd() {
    const { expenses, addChange } = this.props;
    const newExpense = ({ ...this.state, id: expenses.length });
    addChange(newExpense);
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value });
  }

  render() {
    const { currencies } = this.props;
    const arrayCurrencies = Object.keys(currencies);

    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" id="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" onChange={ this.handleChange } />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" onChange={ this.handleChange }>
            {arrayCurrencies.map((state, index) => (
              <option
                key={ arrayCurrencies[index] }
                value={ arrayCurrencies[index] }
              >
                { arrayCurrencies[index] }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" onChange={ this.handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <ButtonAdd onClick={ this.onSavedAdd } />
      </form>
    );
  }
}

FormWallet.propTypes = {
  addChange: PropTypes.func.isRequired,
  currencies: PropTypes.shape({}).isRequired,
  expenses: PropTypes.shape({
    length: PropTypes.number,
  }).isRequired,
  fetchAPI: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: (wallet) => dispatch(valueCambio(wallet)),
  addChange: (stateTotal) => dispatch(convertValue(stateTotal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
