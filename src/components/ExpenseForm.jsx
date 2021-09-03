import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class ExpenseForm extends React.Component {
  render() {
    const { wallet: { currencies } } = this.props;
    // console.log(currencies);
    return (
      <fieldset>
        <form>
          <label htmlFor="valor">
            Valor
            <input type="number" name="valor" id="valor" />
          </label>

          <label htmlFor="descricao">
            Descrição
            <input type="text" name="descricao" id="descricao" />
          </label>

          <label htmlFor="moeda">
            Moeda
            <select name="moeda" id="moeda">
              {currencies.filter((curr) => curr !== 'USDT').map((curr) => (
                <option key={ curr } value={ curr }>{ curr }</option>))}
            </select>
          </label>

          <label htmlFor="pagamento">
            Método de pagamento
            <select name="método de pagamento" id="pagamento">
              <option name="dinheiro">Dinheiro</option>
              <option name="cartão de crédito">Cartão de crédito</option>
              <option name="cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag">
              <option name="alimentação">Alimentação</option>
              <option name="lazer">Lazer</option>
              <option name="trabalho">Trabalho</option>
              <option name="transporte">Transporte</option>
              <option name="saúde">Saúde</option>
            </select>
          </label>

        </form>

      </fieldset>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

ExpenseForm.propTypes = {
  wallet: propTypes.shape({
    currencies: propTypes.arrayOf(propTypes.string),
  }).isRequired,
};

export default connect(mapStateToProps, null)(ExpenseForm);
