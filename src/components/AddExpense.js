import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class AddExpense extends React.Component {
  render() {
    const { currencies } = this.props;

    return (
      <form>
        <label htmlFor="value">
          Valor
          <input id="value" type="text" name="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input id="description" type="text" name="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" name="currency">
            {currencies.map(({ code }) => (
              <option key={ code } value={ code }>{ code }</option>
            ))}
          </select>
        </label>
        <label htmlFor="paymentMethod">
          Método de pagamento
          <select id="paymentMethod" name="paymentMethod">
            <option value="cash">Dinheiro</option>
            <option value="creditCard">Cartão de crédito</option>
            <option value="debitCard">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag">
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transportation">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
        <button type="button">Adicionar despesa</button>
      </form>
    );
  }
}

AddExpense.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(AddExpense);
