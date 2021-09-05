import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

class Table extends Component {
  constructor() {
    super();

    this.createTable = this.createTable.bind(this);
  }

  createTable() {
    const { expenses } = this.props;
    return expenses.map((item) => {
      const currencyInfo = item.exchangeRates[item.currency];
      return (
        <tr key={ item.id }>
          <td>{item.description}</td>
          <td>{item.tag}</td>
          <td>{item.method}</td>
          <td>{item.value || '0.00'}</td>
          <td>{currencyInfo.name.split('/')[0]}</td>
          <td>{parseFloat(currencyInfo.ask).toFixed(2)}</td>
          <td>
            {(parseFloat(item.value) * (parseFloat(currencyInfo.ask)) || 0).toFixed(2) }
          </td>
          <td>Real</td>
          <td>ok</td>
        </tr>
      );
    });
  }

  // Resolvido com ajuda de Luiza Antiques

  render() {
    const { createTable } = this;
    return (
      <table>
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
          { createTable() }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: Proptypes.arrayOf(Proptypes.object),
};

Table.defaultProps = {
  expenses: [],
};

export default connect(mapStateToProps)(Table);
