import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCoin } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.renderForm = this.renderForm.bind(this);
    this.renderHeader = this.renderHeader.bind(this); // bind das funções necessárias;
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  renderHeader() { // COMPONENTE 1
    const { emailInput } = this.props; // puxa o email por props
    return (
      <header>
        <section data-testid="email-field">{emailInput}</section>
        <section data-testid="total-field">0</section>
        <section data-testid="header-currency-field">BRL</section>
      </header>
    );
  }

  renderForm() { // COMPONENTE 2
    const { carteira } = this.props;
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
              { carteira.map((coin) => (
                <option
                  key={ coin }
                  value={ coin }
                >
                  { coin }
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

  render() { // RENDERIZANDO OS DOIS COMPONENTES
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

const mapStateToProps = (state) => ({
  emailInput: state.user.email, // puxamos o email colocado pelo usuário no estado global, e o utilizamos no componente por props;
  carteira: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchCoin()),
});

Wallet.propTypes = {
  carteira: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  emailInput: PropTypes.string.isRequired,
  fetchData: PropTypes.func.isRequired,
  map: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
