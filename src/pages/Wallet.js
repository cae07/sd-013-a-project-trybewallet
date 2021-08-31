import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { wallet } from '../actions';

class Wallet extends React.Component {
  async componentDidMount() {
    const { dispatchCurrencies } = this.props;
    const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await fetchApi.json();
    delete response.USDT;
    dispatchCurrencies(response);
  }

  render() {
    const { moedas } = this.props;
    return (
      <>
        <Header />
        <form>
          <label htmlFor="valor">
            Valor:
            <input id="valor" type="number" />
          </label>
          <label htmlFor="desc">
            Descrição:
            <input id="desc" type="text" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select id="moeda">
              {Object.values(moedas)
                .map(
                  (moeda) => <option key={ moeda.code }>{ moeda.code }</option>,
                )}
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento:
            <select id="pagamento">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
          <input type="submit" value="Adicionar despesa" />
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ moedas: state.wallet.currencies });

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrencies: (state) => dispatch(wallet(state)),
});

Wallet.propTypes = {
  dispatchCurrencies: PropTypes.func.isRequired,
  moedas: PropTypes.objectOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
