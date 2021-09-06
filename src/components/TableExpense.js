import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TableExpense extends React.Component {
  constructor(props) {
    super(props);
    this.subtitle = this.subtitle.bind(this);
    this.listExpenses = this.listExpenses.bind(this);
  }

  subtitle() {
    return (
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
    );
  }

  listExpenses() {
    const { expenses } = this.props;
    return (
      expenses.map(({ exchangeRates, currency, value, id, description, tag, method }) => {
        const exchange = exchangeRates[currency];
        const nameExchange = exchange.name.split('/')[0];
        const askExchange = Number(exchange.ask).toFixed(2);
        const convertValue = (value * exchange.ask).toFixed(2);
        return (
          <tr tr key={ id }>
            <td>{ description }</td>
            <td>{ tag }</td>
            <td>{ method }</td>
            <td>{ value }</td>
            <td>{ nameExchange }</td>
            <td>{ askExchange }</td>
            <td>{ convertValue }</td>
            {/* <td>{ currency }</td> */}
            <td>Real</td>
          </tr>
        );
      })
    );
  }

  render() {
    return (
      <div className="tableExpenses">
        <table>
          <thead>{ this.subtitle() }</thead>
          <tbody>{ this.listExpenses() }</tbody>
        </table>
      </div>
    );
  }
}

TableExpense.propTypes = {
  expenses: PropTypes.array,
  // isFetching: PropTypes.bool,
  // deleteRow: PropTypes.func,
  // editList: PropTypes.func,
}.isRequired;

const mapStateToProps = (stateStore) => ({
  currencies: stateStore.wallet.currencies,
  expenses: stateStore.wallet.expenses,
});

export default connect(mapStateToProps, null)(TableExpense);
