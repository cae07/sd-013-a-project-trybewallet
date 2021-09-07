import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { walletEmail } = this.props;
    return (
      <div>
        <header>
          <h4 data-testid="email-field">{`Email: ${walletEmail}`}</h4>
          <h4 data-testid="total-field">{`Despesa Total: R$ ${0}`}</h4>
          <h4 data-testid="header-currency-field">BRL</h4>
        </header>
        <form>
          <label htmlFor="amount-input">
            Valor:
            <input id="amount-input" type="text" />
          </label>
          <label htmlFor="description-input">
            Descrição:
            <input id="description-input" type="text" />
          </label>
          <label htmlFor="currency-input">
            Moeda:
            <select id="currency-input">
              <option>Moeda 01</option>
              <option>Moeda 02</option>
              <option>Moeda 03</option>
            </select>
          </label>
          <label htmlFor="payment-input">
            Método de Pagamento:
            <select id="payment-input">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag-input">
            Tag:
            <select id="tag-input">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  walletEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  walletEmail: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
