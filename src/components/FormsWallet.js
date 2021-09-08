import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { walletForm, fetchAPI } from '../actions';

// Requisitos 6, 7, 8. referencia ao codigo do aluno Rafael Janovicci
class FormsWallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.count = 0;
  }

  handleClick(event) {
    event.preventDefault();
    const { walletState } = this.props;
    walletState();
    const { expensesOk, currencies } = this.props;
    expensesOk({ id: this.count, ...this.state, exchangeRates: currencies });
    this.count += 1;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  part1() {
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input id="value" type="text" name="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            type="text"
            name="description"
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }

  part2() {
    const { currencies } = this.props;
    this.valores = (y) => Object.values(currencies).find((x) => x.code === y);
    return (
      <div>

        <label htmlFor="moedas">
          Moeda:
          <select
            id="moedas"
            name="currency"
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
        <label htmlFor="method">
          Método de pagamento:
          <select
            id="method"
            name="method"
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
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
          { this.part1() }
          { this.part2() }
          <button
            type="submit"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

FormsWallet.defaultProps = {
  currencies: {},
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies[0],
});

const mapDispatchToProps = (dispatch) => ({
  expensesOk: (payload) => dispatch(walletForm(payload)),
  walletState: (payload) => dispatch(fetchAPI(payload)),
});

FormsWallet.propTypes = {
  expensesOk: PropTypes.arrayOf(Object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(FormsWallet);
