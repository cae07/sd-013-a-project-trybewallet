import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // id: 0,
      // value: 0,
      // currency: 'USD',
      // method: 'Dinheiro',
      // tag: 'Alimentação',
      // description: '',
    };
  }

  inputValor() {
    return (
      <label htmlFor="valor">
        Valor:
        <input
          type="text"
          // value
          name="valor"
          // onChange
        />
      </label>
    );
  }

  inputDescricao() {
    return (
      <label htmlFor="descricao">
        Descrição:
        <input
          type="text"
          // value
          name="descricao"
          // onChange
        />
      </label>
    );
  }

  inputSelect() {
    return (
      <label htmlFor="moeda">
        Moeda:
        <select>Selecione</select>
      </label>
    );
  }

  inputPagamento() {
    return (
      <label htmlFor="metodo-pagamento">
        Método de pagamento:
        <select>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  inputTags() {
    return (
      <label htmlFor="Tag">
        Categoria:
        <select>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="total-field">{ `Dispensa total: ${0}` }</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <form>
          { this.inputValor() }
          { this.inputDescricao() }
          { this.inputSelect() }
          { this.inputPagamento() }
          { this.inputTags() }
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
