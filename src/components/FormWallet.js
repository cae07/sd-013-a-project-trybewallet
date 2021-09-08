import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormWallet extends React.Component {
  constructor() {
    super();
    this.currenciesList = this.currenciesList.bind(this);
  }

  currenciesList() {
    const { currencies } = this.props;
    return currencies.map((moeda) => (
      <option key={ moeda } value={ moeda }>{ moeda }</option>
    ));
  }

  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input id="valor" type="text" name="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input id="descricao" type="text" name="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda" name="moeda">
            {this.currenciesList()}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento:
          <select id="pagamento" name="pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" name="tag">
            <option value="alimentacao">alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

FormWallet.propTypes = {
  currencies: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps)(FormWallet);
