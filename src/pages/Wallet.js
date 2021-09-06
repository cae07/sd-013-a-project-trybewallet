import React from 'react';
import { connect } from 'react-redux';
import './Wallet.css';
import PropTypes from 'prop-types';
import {
  requestAPI,
} from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.renderSelect = this.renderSelect.bind(this);
  }

  componentDidMount() {
    const { dispatchAPI } = this.props;
    dispatchAPI();
  }

  // renderSelect() {
  //   const { fetching, currencies } = this.props;
  //   if (fetching === false) {
  //     return (
  //       // <select id="currency" name="currency" />
  //     );
  //   }
  // }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <h1 data-testid="email-field">{ email }</h1>
          <h1 data-testid="total-field">0</h1>
          <h1 data-testid="header-currency-field">BRL</h1>
        </header>
        <form className="formulario">
          <label htmlFor="expense">
            Valor:
            <input type="number" id="expense" />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select id="currency" name="currency">
              <option value="teste">Teste</option>
              {/* { this.renderSelect() } */}
            </select>
          </label>
          <label htmlFor="payment-method">
            Método de pagamento:
            <select id="payment-method" name="payment-method">
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
              <option value="Dinheiro">Dinheiro</option>
            </select>
          </label>
          <label htmlFor="Tag">
            Tag:
            <select id="Tag" name="Tag">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <label htmlFor="Description">
            Descrição:
            <input type="text" id="Description" />
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (storeState) => ({
  email: storeState.user.email,
  moedas: storeState.wallet.currencies,
  fetching: storeState.wallet.isFetching,
});

const mapDispathToProps = (dispatch) => ({
  dispatchAPI: () => dispatch(requestAPI()),
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispathToProps)(Wallet);
