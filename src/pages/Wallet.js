import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { state } = this.props;
    const { user: { email } } = state;
    return (
      <div>
        <header>
          <h2 data-testid="email-field">{ email }</h2>
          <h3 id="expenses" data-testid="total-field">0</h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
        <form>
          <label htmlFor="value">
            Valor:
            <input id="value" type="number" />
          </label>
          <label htmlFor="description">
            Descrição:
            <input id="description" type="text" />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select id="currency">
              0
            </select>
          </label>
          <label htmlFor="payment-method">
            Método de pagamento:
            <select id="payment-method">
              <option value="money">Dinheiro</option>
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="category">
            Tag:
            <select id="category">
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="job">Trabalho</option>
              <option value="job">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>

        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  state: PropTypes.shape().isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(Wallet);
