import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.inputValue = this.inputValue.bind(this);
    this.selectOptionMoeda = this.selectOptionMoeda.bind(this);
    this.selectOptionPagamento = this.selectOptionPagamento.bind(this);
    this.selectOptionTag = this.selectOptionTag.bind(this);

    this.state = {};
  }

  inputValue() {
    return (
      <label htmlFor="valor">
        Valor:
        <input type="number" id="valor" />
      </label>
    );
  }

  imputDescription() {
    return (
      <label htmlFor="description">
        Descrição:
        <input type="description" id="valor" />
      </label>
    );
  }

  selectOptionMoeda() {
    return (
      <label htmlFor="moeda">
        Moeda:
        <select id="moeda">
          <option>Trybe</option>
        </select>
      </label>
    );
  }

  selectOptionPagamento() {
    return (
      <label htmlFor="pagamento">
        Método de pagamento:
        <select id="pagamento">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  selectOptionTag() {
    return (
      <label htmlFor="tag">
        Tag:
        <select id="tag">
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
    const { stateEmail } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field"><strong>{`Email: ${stateEmail}`}</strong></p>
          <p data-testid="total-field">{`Despesa: ${0}`}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <fieldset>
            {this.inputValue()}
            {this.imputDescription()}
            {this.selectOptionMoeda()}
            {this.selectOptionPagamento()}
            {this.selectOptionTag()}
          </fieldset>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  stateEmail: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  stateEmail: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
