import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { roundNumber } from '../data';

class ExpensesTable extends React.Component {
  constructor(props) {
    super(props);

    this.renderTableData = this.renderTableData.bind(this);
  }

  renderTableData() {
    const { expenses } = this.props;

    return expenses.map(({
      id, description, tag, method, currency, value, exchangeRates,
    }) => {
      const rates = Object.entries(exchangeRates);
      const rate = rates.find(([name]) => name === currency)[1];
      const { name, ask } = rate;

      return (
        <tr key={ id }>
          <td>{ description }</td>
          <td>{ tag }</td>
          <td>{ method }</td>
          <td>{ `${roundNumber(value)}` }</td>
          <td>{ name.split('/')[0] }</td>
          <td>{ roundNumber(ask) }</td>
          <td>{ roundNumber(Number(value) * Number(ask)) }</td>
          <td>Real</td>
          <td>
            <button type="button">Editar</button>
            <button type="button">Excluir</button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <section>
        <table>
          <tbody>
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
            {this.renderTableData()}
          </tbody>
        </table>
      </section>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(ExpensesTable);
