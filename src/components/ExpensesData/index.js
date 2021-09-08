import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './ExpensesData.css';

class ExpensesData extends Component {
  generateExpensesTable(expense) {
    return expense.map(({
      id, description, tag, method, value, currency, exchangeRates,
    }) => {
      const fixedValue = parseFloat(value);
      const askRate = parseFloat(exchangeRates[currency].ask);

      return (
        <tr style={ { margin: '10px' } } className="active" key={ id }>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{fixedValue}</td>
          <td>{exchangeRates[currency].name.split('/')[0]}</td>
          <td>
            {askRate.toFixed(2)}
          </td>
          <td>{(value * askRate).toFixed(2)}</td>
          <td>Real</td>
          <td>Editar/Excluir</td>
        </tr>
      );
    });
  }

  render() {
    const { expenses } = this.props;
    return (
      <div className="expenses-container">
        <h1>TABELA DE DESPESAS</h1>

        <table className="expenses-table">
          <thead>
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
          </thead>
          <tbody>
            { this.generateExpensesTable(expenses) }
          </tbody>
        </table>
      </div>
    );
  }
}

ExpensesData.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    tag: PropTypes.string,
    method: PropTypes.string,
    value: PropTypes.string,
    currency: PropTypes.string,
    exchangeRates: PropTypes.shape({
      code: PropTypes.string,
      name: PropTypes.string,
      ask: PropTypes.string,
    }),
  })).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpensesData);
