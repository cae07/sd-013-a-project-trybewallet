import React from 'react';
import Input from './Input';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiThunk } from '../actions';

class Forms extends React.Component {
  componentDidMount() {
    const { ApiCoin } = this.props;
    ApiCoin();
  }
  
  render() {
    const { currencies, value, description, currency, method, tag, handleChange } = this.props;
    const getCurrenciesArray = Object.keys(currencies);


    return (
      <div>
        <form>
          <Input
            label="Valor:"
            name="value"
             value={ value }
            handleChange={ handleChange }
          />
          <Input
             label="Descrição"
            name="description"
            value={ description }
            handleChange={ handleChange }
          />
             <label  
            htmlFor="select-coin"
             handleChange={ handleChange }
             currency={ currency }
             >
                Moeda
                <select 
                required="required" 
                id="select-coin"
                name="currency"
                onChange={ handleChange }
                value={ currency }
                >
                    {getCurrenciesArray
                      .map((item, index) => (
                          item !== 'USDT' && <option value={ item } key={ index }>{item}</option>
                      ))}
                </select>
            </label>

            <label 
            htmlFor="select-payment"
            handleChange={ handleChange }
            method={ method }
            >
              Método de pagamento
            <select 
              required="required"
              id="select-payment"
              name="method"
              onChange={ handleChange }
              value={ method }
            >
                <option name="Dinheiro">Dinheiro</option>
                <option name="Credito">Cartão de crédito</option>
                <option name="Debito">Cartão de débito</option>
            </select>
            </label>

            <label 
              htmlFor="select-category"
              handleChange={ handleChange }
              tag={ tag }
            >
            Tag
              <select 
                required="required" 
                id="select-category"
                name="tag"
                onChange={ handleChange }
                value={ tag }
              >
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
  ApiCoin: PropTypes.func,
  currency: PropTypes.string,
  description: PropTypes.string,
  handleChange: PropTypes.func,
  method: PropTypes.string,
  tag: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Forms);