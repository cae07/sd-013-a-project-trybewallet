import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMoedas, updateExpenses } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '0',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'food',
      description: '',
    };
    this.hChange = this.hChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { fetchMoeda } = this.props;
    fetchMoeda();
  }

  // async fetchMoedas() {
  //   const listaMoedas = await fetch('https://economia.awesomeapi.com.br/json/all');
  //   const data = await listaMoedas.json();
  //   const moedas = Object.keys(data).filter((a) => a !== 'USDT');
  //   this.setState({ moedas });
  // }

  mapOptions(opt) {
    const moedas = Object.keys(opt).filter((a) => a !== 'USDT');
    return (moedas.map(
      (moeda) => (
        <option value={ moeda } key={ moeda }>
          { moeda }
        </option>),
    ));
  }

  hChange(input) {
    const { id, value } = input.target;
    this.setState({ [id]: value });
  }

  async handleClick() {
    const { expList, fetchMoeda, addExpense } = this.props;
    await fetchMoeda();
    const payload = { id: expList.length, ...this.state };
    addExpense(payload);
    this.setState({
      value: '0',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'food',
      description: '',
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { curList } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" id="value" value={ value } onChange={ this.hChange } />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            value={ description }
            onChange={ this.hChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" value={ currency } onChange={ this.hChange }>
            { this.mapOptions(curList)}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" value={ method } onChange={ this.hChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" value={ tag } onChange={ this.hChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleClick }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  curList: state.wallet.currencies,
  expList: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoeda: () => dispatch(fetchMoedas()),
  addExpense: (payload) => dispatch(updateExpenses(payload)),
});

Form.propTypes = {
  fetchMoeda: PropTypes.func.isRequired,
  curList: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.array),
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  addExpense: PropTypes.func.isRequired,
  expList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
