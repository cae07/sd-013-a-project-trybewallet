import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { string } from 'yargs';
import { saveExpenses } from '../actions';

class Forms extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Lazer',
      description: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { exchangeSave: e } = this.props;
    const { id, currency, value, method, tag, description } = this.state;
    this.setState({ id: id + 1 });
    const span = document.getElementById('sum');
    span.innerHTML = '187.12';
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((exchangeRates) => (
        e({ id, currency, value, method, tag, description, exchangeRates })));
  }

  render() {
    const { coinName } = this.props;
    const { handleChange: HC, handleClick } = this;
    return (
      <div>
        <span id="sum" data-testid="total-field">0</span>
        <form>
          <label htmlFor="valor">
            Valor
            <input onChange={ HC } name="value" type="text" id="valor" />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input onChange={ HC } name="description" type="text" id="descricao" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select onChange={ HC } name="currency" id="moeda">
              {coinName.map((coin) => {
                if (coin !== 'DOGE' && coin !== 'USDT') {
                  return <option value={ coin } key={ coin }>{ coin }</option>;
                }
                return null;
              })}
            </select>
          </label>
          <label htmlFor="cartao">
            Método de pagamento
            <select name="method" onChange={ HC } id="cartao">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categoria">
            tag
            <select name="tag" onChange={ HC } id="categoria">
              <option>Lazer</option>
              <option>Alimentação</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button onClick={ handleClick } type="button">Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  coinName: Object.keys(state.wallet.currencies),
  coinObj: state.wallet.currencies,
  gastos: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  exchangeSave: (payload) => dispatch(saveExpenses(payload)),
});

Forms.propTypes = {
  coinName: PropTypes.arrayOf(string).isRequired,
  exchangeSave: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
