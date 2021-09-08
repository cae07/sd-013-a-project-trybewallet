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
      <label htmlFor="value">
        Valor:
        <input
          type="number"
          id="value"
          name="value"
          // value={ value }
          // onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputDescricao() {
    return (
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          id="description"
          name="description"
          // value={ description }
          // onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputSelect() {
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          name="currency"
          className="moedas"
          // value={ currency }
          // onChange={ this.handleChange }
        >
          <option>sdasd</option>
        </select>
      </label>
    );
  }

  inputPagamento() {
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select
          id="method"
          name="method"
          // value={ method }
          // onChange={ this.handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  inputTags() {
    return (
      <label htmlFor="tag">
        Tag:
        <select
          id="tag"
          name="tag"
          // value={ tag }
          // onChange={ this.handleChange }
        >
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
