import React from 'react';
import Input from './Input';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { fetchApiThunk } from '../actions';

class Forms extends React.Component {
  componentDidMount() {
    const { ApiCoin } = this.props;
    ApiCoin();
  }
  
  render() {
    const { currencies } = this.props;
    const getCurrenciesArray = Object.keys(currencies);

    return (
      <div>
        <form>
          <Input
            label="Valor"
          />
          <Input
            label="Descrição"
          />
            <label htmlFor="select-coin">
                Moeda
                <select required="required" id="select-coin">
                    {getCurrenciesArray
                      .map((item, index) => (
                          item !== 'USDT' && <option value={ item } key={ index }>{item}</option>
                      ))}
                </select>
            </label>

            <label htmlFor="select-payment">
            Método de pagamento
            <select required="required" id="select-payment">
                <option name="Dinheiro">Dinheiro</option>
                <option name="Credito">Cartão de crédito</option>
                <option name="Debito">Cartão de débito</option>
            </select>
            </label>

            <label htmlFor="select-category">
            Tag
            <select required="required" id="select-category">
                <option name="Alimentação">Alimentação</option>
                <option name="Lazer">Lazer</option>
                <option name="Trabalho">Trabalho</option>
                <option name="Transporte">Transporte</option>
                <option name="Saúde">Saúde</option>
            </select>
            </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  ApiCoin: () => dispatch(fetchApiThunk()),
});

Forms.propTypes = {
  ApiCoin: Proptypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Forms);