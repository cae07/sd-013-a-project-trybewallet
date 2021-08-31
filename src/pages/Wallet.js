import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiDolar } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { actionApi } = this.props;
    actionApi();
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
        <input type="text" id="description" />
      </label>
    );
  }

  selectOptionMoeda() {
    const { stateApiMoeda } = this.props;
    return (
      <label htmlFor="moeda">
        Moeda:
        <select id="moeda">
          {stateApiMoeda.map((element) => (
            <option key={ element }>{element}</option>
          ))}
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
          {this.inputValue()}
          {this.imputDescription()}
          {this.selectOptionMoeda()}
          {this.selectOptionPagamento()}
          {this.selectOptionTag()}
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  actionApi: PropTypes.func.isRequired,
  stateApiMoeda: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  stateEmail: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  stateEmail: state.user.email,
  stateApiMoeda: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  actionApi: () => dispatch(fetchApiDolar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
