import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import currencyAPI from '../services';

class ExpenseForm extends React.Component {
  render() {
    const { wallet: { currencies } } = this.props;
    return (
      <div>
        <form action="">
          <label htmlFor="valor">
            Valor
            <input type="text" name="valor" id="valor" />
          </label>
          <label htmlFor="descrição">
            Descrição
            <input type="text" name="descrição" id="descrição" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select name="moeda" id="moeda">
              {currencies.filter((curr) => curr !== 'USDT').map(
                (curr) => <option key={ curr } value={ curr }>{ curr }</option>,
              )}
            </select>
          </label>
          <label htmlFor="metodoDePagamento">
            Método de pagamento
            <select name="metodoDePagamento" id="metodoDePagamento">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(currencyAPI()),
});

ExpenseForm.propTypes = {
  wallet: propTypes.shape({
    currencies: propTypes.arrayOf(propTypes.string),
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
