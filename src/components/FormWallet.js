import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrenciesApi, getExpensesApi } from '../actions';

class FormWallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value });
  }

  handleClick() {
    const { setExpenses } = this.props;
    setExpenses(this.state);
    const { id } = this.state;
    this.setState({ id: id + 1 });
  }

  render() {
    const { currencies } = this.props;
    console.log(currencies);
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input id="value" type="number" onChange={ this.handleChange } />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea id="description" onChange={ this.handleChange } />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" onChange={ this.handleChange }>
            {currencies.map((currencie, index) => (
              <option key={ index }>{currencie}</option>
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
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

FormWallet.propTypes = {
  setCurrencies: PropTypes.func.isRequired,
  setExpenses: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(getCurrenciesApi()),
  setExpenses: (payload) => dispatch(getExpensesApi(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
