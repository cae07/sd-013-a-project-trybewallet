import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formAct } from '../actions';

class WalletForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: '',
      descrição: '',
      moedaSelecionada: 'USD',
      metodoPagamento: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.inputs = this.inputs.bind(this);
    this.count = 0;
  }

  handleClick(event) {
    event.preventDefault();
    const { expenses } = this.props;
    const { moedaSelecionada } = this.state;
    const exchangeRates = this.valores(moedaSelecionada);
    expenses({ id: this.count, ...this.state, exchangeRates });
    this.count += 1;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  inputs() {
    return (
      <>
        <label htmlFor="valor">
          Valor:
          <input
            id="valor"
            type="text"
            name="valor"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="descrição">
          Descrição:
          <input
            id="descrição"
            type="text"
            name="descrição"
            onChange={ this.handleChange }
          />
        </label>
      </>
    );
  }

  selects() {
    const { currencies } = this.props;
    this.valores = (y) => Object.values(currencies).find((x) => x.code === y);
    return (
      <>
        <label htmlFor="moedas">
          Moeda:
          <select
            id="moedas"
            name="moedaSelecionada"
            onChange={ this.handleChange }
          >
            { Object.keys(currencies).filter((x) => x !== 'USDT')
              .map((moeda, index) => (
                <option
                  key={ index }
                  id={ index }
                >
                  { moeda }
                </option>))}
          </select>
        </label>
        <label htmlFor="metodoPagamento">
          Método de pagamento:
          <select
            id="metodoPagamento"
            name="metodoPagamento"
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" name="tag" onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Saúde</option>
            <option>Transporte</option>
          </select>
        </label>
      </>
    );
  }

  render() {
    return (
      <form id="formulario">
        { this.inputs() }
        { this.selects() }
        <button
          type="submit"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

WalletForm.defaultProps = {
  currencies: {},
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies[0],
});

const mapDispatchToProps = (dispatch) => ({
  expenses: (payload) => dispatch(formAct(payload)),
});

WalletForm.propTypes = {
  expenses: PropTypes.arrayOf(Object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
