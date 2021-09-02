import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';

class Wallet extends React.Component {
  constructor() {
    super();

    this.getExpensesFromGState = this.getExpensesFromGState.bind(this);
  }

  // Função criada com o auxilio do Victor Diniz;
  getExpensesFromGState() {
    const { expenses } = this.props;
    return expenses.map((expense) => {
      const { description, tag, currency, method, value, exchangeRates } = expense;
      const askPrice = exchangeRates[currency].ask;
      const expenseInBrl = Math.round((value * askPrice) * 100) / 100;
      const usedCurrency = exchangeRates[currency];
      const roundAsk = Math.round((usedCurrency.ask) * 100) / 100;
      return (
        <tr className="body-table" key={ expense.id } id={ expense.id }>
          <td>{ description }</td>
          <td>{ tag }</td>
          <td>{ method }</td>
          <td>{ value }</td>
          <td>{ usedCurrency.name }</td>
          <td>{ roundAsk }</td>
          <td>{ expenseInBrl }</td>
          <td>Real</td>
          <td>
            <button type="button">Deletar</button>
            <button type="button">Editar</button>
          </td>
        </tr>
      );
    });
  }

  render() {
    const { getExpensesFromGState } = this;
    return (
      <div>
        <Form />
        <table className="header-table">
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          { getExpensesFromGState() }
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

Wallet.propTypes = {
  expenses: PropTypes.objectOf().isRequired,
};

export default connect(mapStateToProps)(Wallet);
