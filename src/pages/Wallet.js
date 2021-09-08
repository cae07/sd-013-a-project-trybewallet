import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  renderHeader() {
    const { salvarStore } = this.props;
    return (
      <header className="header">
        <section data-testid="email-field">{`${salvarStore}`}</section>
        <section data-testid="total-field">0</section>
        <section data-testid="header-currency-field">BRL</section>
      </header>
    );
  }

  renderForm() {
    return (
      <article>
        <form>
          <label htmlFor="value">
            Valor
            <input type="text" id="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select type="text" id="currency">
              <option value="">Nada</option>
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select type="text" id="payment">
              <option value="money">Dinheiro</option>
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="despesa">
            Tag
            <select type="text" id="despesa">
              <option value="food">Alimentação</option>
              <option value="house">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="traffic">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </article>
    );
  }

  render() {
    return (
      <main>
        {this.renderHeader()}
        <section>
          {this.renderForm()}
        </section>
      </main>
    );
  }
}

Wallet.propTypes = {
  salvarStore: func.isRequired,
};

const mapStateToProps = (state) => ({
  salvarStore: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
