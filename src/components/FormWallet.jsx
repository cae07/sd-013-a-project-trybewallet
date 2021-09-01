import React from 'react';
import { connect } from 'react-redux';
import { valueCambio } from '../actions';

class FormWallet extends React.Component {

  componentDidMount() {
    const { fetchAPI } = this.props;
    fetchAPI();
  }

  render() {
    const { currencies } = this.props;
    const arrayCurrencies = Object.keys(currencies);

    return (
      <form>
        <label>
          Valor
              <input type="text" name="value" />
        </label>
        <label>
          Descrição
              <input type="text" name="description" />
        </label>
        <label>
          Moeda
            <select>
              { arrayCurrencies.map((state, index) => (
                <option
                  key={ arrayCurrencies[index] }
                  value={ arrayCurrencies[index] }
                >
                  { arrayCurrencies[index] }
                </option>
              ))} 
            </select>
        </label>
        <label>
          Método de pagamento
            <select>
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
        </label>
        <label>
          Tag
            <select>
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
        </label>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  currencies: state.walletReducer.currencies,
})

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: (wallet) => dispatch(valueCambio(wallet)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
