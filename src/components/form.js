import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setExpense, walletFetch } from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.hG = this.hG.bind(this);
    this.submit = this.submit.bind(this);
    this.inputValue = this.inputValue.bind(this);
  }

  hG(event) {
    // HG = HandleChange... obg lint!
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  submit() {
    const { dollynho, moedas, walleetFetch } = this.props;
    walleetFetch();
    dollynho({ ...this.state, exchangeRates: moedas });
    this.setState((state) => {
      const id = state.id + 1;
      return { id };
    });
  }

  inputValue(value) {
    return (
      <label htmlFor="valor">
        Valor
        <input
          onChange={ this.hG }
          type="text"
          id="valor"
          name="value"
          value={ value }
        />
      </label>
    );
  }

  render() {
    const { moedas } = this.props;
    const arrayMoedas = Object.keys(moedas);
    const moedasFiltradas = arrayMoedas.filter((moeda) => moeda !== 'USDT');
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        { this.inputValue(value) }
        <label htmlFor="descricao">
          Descrição
          <input
            onChange={ this.hG }
            type="text"
            id="descricao"
            name="description"
            value={ description }
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select onChange={ this.hG } id="moeda" name="currency" value={ currency }>
            {moedasFiltradas.map((ma, index) => (<option key={ index }>{ma}</option>))}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select onChange={ this.hG } name="method" id="pagamento" value={ method }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select onChange={ this.hG } id="tag" name="tag" value={ tag }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.submit }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  moedas: PropTypes.object,
  dollynho: PropTypes.func,
  walleetFetch: PropTypes.func,
}.isRequired;

Form.defaultProps = { moedas: {} };

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies[0],
});

const mapDespenseToProps = (dispatch) => ({
  walleetFetch: (payload) => dispatch(walletFetch(payload)),
  dollynho: (payload) => dispatch(setExpense(payload)),
});

export default connect(mapStateToProps, mapDespenseToProps)(Form);
