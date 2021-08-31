import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';
import trybeLogo from '../images/trybeLogo.png';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    const { moedas } = this.props;
    moedas();
  }

  inputValue() {
    return (
      <label htmlFor="value">
        Valor:
        <input id="value" className="valueMoeda" type="number" />
      </label>
    );
  }

  inputDescription() {
    return (
      <label htmlFor="description">
        Descrição da despesa:
        <input id="description" type="text" />
      </label>
    );
  }

  inputSelect() {
    const { currenciesState } = this.props;
    return (
      <label htmlFor="moeda">
        Moeda:
        <select className="valueMoeda" id="moeda">
          {currenciesState.map((moeda) => (<option key={ moeda }>{ moeda }</option>))}
        </select>
      </label>
    );
  }

  inputSelectPaymentMethod() {
    return (
      <label htmlFor="paymentMethod">
        Método de pagamento:
        <select id="paymentMethod">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  inputSelectDespesa() {
    return (
      <label htmlFor="despesa">
        Tag:
        <select id="despesa">
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
      <div>
        <header className="header-wallet-contain">
          <div className="header-wallet">
            <img src={ trybeLogo } alt="trybeLogo" width="150px" height="40px" />
            <div className="wallet-email">
              <p data-testid="email-field" className="email">
                { `Email: ${email}` }
              </p>
              <p data-testid="total-field">{`Despesa total: ${0}`}</p>
              <p data-testid="header-currency-field">BRL</p>
            </div>
          </div>
        </header>
        <form className="contain-forms-wallet">
          {this.inputValue()}
          {this.inputSelect()}
          {this.inputSelectPaymentMethod()}
          {this.inputSelectDespesa()}
          {this.inputDescription()}
          <button type="button">Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currenciesState: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  moedas: () => dispatch(fetchAPI()),
});

Wallet.propTypes = {
  currenciesState: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  email: PropTypes.func.isRequired,
  moedas: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
