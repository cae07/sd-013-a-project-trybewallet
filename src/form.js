import React from 'react';
import { connect } from 'react-redux';
// import FillCoin from './components/fillCoin';
import Proptypes from 'prop-types';
import { getApiThunk, addExpenseWithFetch } from './actions';
// import getRateAPI from '../services/awesomeapi';
// import { getApiThunk } from '../actions';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getAPI } = this.props;
    getAPI();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
    // console.log(this.state);
  }

  handleClick() {
    const { id, value, description, currency, method, tag } = this.state;
    const { addExpenses } = this.props;
    const estadoLocal = { id, value, description, currency, method, tag };
    addExpenses(estadoLocal);
    this.setState({ id: id + 1 });
  }

  render() {
    const { currencies } = this.props;
    // console.log(currencies);
    const currenciesArray = Object.keys(currencies);
    // console.log(getCurrencies);
    // const { description } = this.state;
    return (
      <form>
        <label htmlFor="despesas">
          Valor
          <input onChange={ this.handleChange } name="value" id="despesas" type="text" />
        </label>
        <label htmlFor="description">
          Descrição
          <input onChange={ this.handleChange } id="description" name="description" />
        </label>
        <label htmlFor="select-coin">
          Moeda
          <select onChange={ this.handleChange } name="currency" id="select-coin">
            {currenciesArray
              .map((item, index) => (
              // Remova das informações trazidas pela API a opção 'USDT' (Dólar Turismo).
              // Preenche as options
                item !== 'USDT' && <option key={ index }>{item}</option>
              ))}
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento
          <select onChange={ this.handleChange } name="method" id="metodo">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select onChange={ this.handleChange } name="tag" id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button onClick={ this.handleClick } type="button">Adicionar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (estado) => dispatch(addExpenseWithFetch(estado)),
  getAPI: () => dispatch(getApiThunk()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  getRateAPI: Proptypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
