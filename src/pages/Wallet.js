import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrency } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  renderHeader() {
    const { emailInput } = this.props;
    return (
      <header>
        <section data-testid="email-field">{emailInput}</section>
        <section data-testid="total-field">0</section>
        <section data-testid="header-currency-field">BRL</section>
      </header>
    );
  }

  renderForm() {
    const { moedas } = this.props;
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
              {moedas.map((moeda) => (
                <option
                  key={ moeda }
                  value={ moeda }
                >
                  {moeda}
                </option>))}
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

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchCurrency()),
});

Wallet.propTypes = {
  emailInput: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  emailInput: state.user.email,
  moedas: state.wallet.currencies,
});
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
