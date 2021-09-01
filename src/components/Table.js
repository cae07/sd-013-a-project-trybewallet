import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  constructor(props) {
    super(props);

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
          <td>{item.value}</td>
          <td>{currencyInfo.name.split('/')[0]}</td>
          <td>{parseFloat(currencyInfo.ask).toFixed(2)}</td>
          <td>{(parseFloat(item.value) * parseFloat(currencyInfo.ask)).toFixed(2)}</td>
          <td>Real</td>
          <td>ok</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table>
        <tr className="table-header">
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
        {this.createTable()}
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
};

Table.defaultProps = {
  expenses: [],
};

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Table);
