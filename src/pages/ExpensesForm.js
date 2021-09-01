import React from 'react';
/* import PropTypes from 'prop-types'; */
import { connect } from 'react-redux';
/* import fetchMoeda from '../services/APIMoeda'; */

class ExpensesForm extends React.Component {
  constructor() {
    super();

    this.state = {
      /* currency: 'USD', */
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  renderSelectCurrency(value, handleChange) {
    /* const { currencies } = this.props; */
    return (
      <select
        id="currency-input"
        name="currency"
        data-testid="currency-input"
        onChange={ handleChange }
        value={ value }
      >
        { currencies.map((currency) => {
          if (currency === 'USDT') return '';
          return (
            <option key={ currency } data-testid={ currency }>
              { currency }
            </option>
          );
        })}
      </select>
    );
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor:
            <input id="value" type="text" name="name" />
          </label>
          <label htmlFor="description">
            Descrição:
            <input id="description" type="text" name="description" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select id="moeda">
              <div>nada</div>
            </select>
          </label>
          <label htmlFor="metodo">
            Método de pagamento
            <select id="metodo">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option selected value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="Tag">
            Tag
            <select id="Tag">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option selected value="Trabalho">Trabalho</option>
              <option selected value="Transporte">Transporte</option>
              <option selected value="Saúde">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

/* const mapDispatchToProps = (dispatch) => {
  currencies
}; */
/* expensesForm.propTypes = {
  email: PropTypes.string.isRequired,
  gastos: PropTypes.number.isRequired,
  cambio: PropTypes.string.isRequired,
}; */

export default connect(mapStateToProps)(ExpensesForm);
