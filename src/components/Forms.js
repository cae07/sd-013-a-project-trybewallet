import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { allMoedas, despesaUser } from '../actions';

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
    };
    this.addDespesa = this.addDespesa.bind(this);
    this.valor = this.valor.bind(this);
    this.moeda = this.moeda.bind(this);
    this.method = this.method.bind(this);
    this.tag = this.tag.bind(this);
    this.description = this.description.bind(this);
    this.logica = this.logica.bind(this);
  }

  addDespesa({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  valor() {
    return (
      <label htmlFor="valor">
        valor
        <input
          name="value"
          id="valor"
          type="text"
          onChange={ this.addDespesa }
        />
      </label>
    );
  }

  moeda() {
    const { coins } = this.props;
    return (
      <label htmlFor="Moeda">
        Moeda:
        <select name="currency" id="Moeda" onChange={ this.addDespesa }>
          {Object.keys(coins)
            .map((coin, index) => <option key={ index }>{coin}</option>)}
        </select>
      </label>

    );
  }

  method() {
    return (
      <label htmlFor="Metodo">
        Método de pagamento:
        <select name="method" id="Metodo" onChange={ this.addDespesa }>
          <option>Dinheiro</option>
          <option>Cartão de crédito </option>
          <option>Cartão de débito </option>
        </select>
      </label>
    );
  }

  tag() {
    return (
      <label htmlFor="Tag">
        Tag:
        <select name="tag" id="Tag" onChange={ this.addDespesa }>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  description() {
    return (
      <label htmlFor="descricao">
        Descrição:
        <input
          type="text"
          name="description"
          id="descricao"
          onChange={ this.addDespesa }
        />
      </label>
    );
  }

  logica(e) {
    e.preventDefault();
    const { props: { expenses, despesa, coins, falha } } = this;
    falha();
    this.setState({ exchangeRates: coins },
      async () => {
        const concExpenses = expenses.concat(this.state);
        this.setState((prevent) => ({ id: prevent.id + 1 }));
        despesa(concExpenses);
      });
  }

  render() {
    return (
      <form onSubmit={ this.logica }>
        {this.valor()}
        {this.moeda()}
        {this.method()}
        {this.tag()}
        {this.description()}
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}
const mapDispathToProps = (dispatch) => ({
  despesa: (payload) => dispatch(despesaUser(payload)),
  falha: () => dispatch(allMoedas()),
});

const mapStateToProps = (state) => ({
  coins: state.wallet.currencies,
  expenses: state.wallet.expenses,
});
Forms.propTypes = {
  coins: PropTypes.objectOf.isRequired,
  expenses: PropTypes.arrayOf.isRequired,
  despesa: PropTypes.func.isRequired,
  falha: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispathToProps)(Forms);
