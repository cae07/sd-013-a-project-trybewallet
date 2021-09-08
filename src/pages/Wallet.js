import React, { Component } from 'react';
import { func } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendMoedasApi } from '../actions';
import Moedas from '../components/Moedas';

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  componentDidMount() {
    const { dispatchMoedas } = this.props;
    dispatchMoedas();
  }

  renderHeader() {
    const { salvarStore } = this.props;
    return (
      <header>
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
            Moeda:
            <select type="text" id="currency">
              <Moedas />
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
        <Link to="/">VOLTAR</Link>
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
  dispatchMoedas: func.isRequired,
};

const mapStateToProps = (state) => ({
  salvarStore: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchMoedas: () => dispatch(sendMoedasApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
