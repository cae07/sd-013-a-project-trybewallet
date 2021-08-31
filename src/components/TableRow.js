import React, { Component } from 'react';
import PropTypes from 'prop-types';

function round2Digits(number) {
  return Math.round((Number(number) + Number.EPSILON) * 100) / 100;
}

function convertCurrency(expense) {
  const { currency, value, exchangeRates } = expense;
  const converted = Number(value) * Number(exchangeRates[currency].ask);
  return round2Digits(converted);
}

class TableRow extends Component {
  render() {
    const { expense } = this.props;
    const {
      value,
      description,
      method,
      tag,
      currency,
      exchangeRates,
    } = expense;
    const { name, ask } = exchangeRates[currency]; // Example of name -> "Dólar Americano/Real Brasileiro"
    const targetCurrency = name.split('/')[0];
    let baseCurrency = name.split('/')[1];
    if (!baseCurrency) baseCurrency = 'Real';
    return (
      <tr>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ value }</td>
        <td>{ targetCurrency }</td>
        <td>{ round2Digits(ask) }</td>
        <td>{ convertCurrency(expense) }</td>
        <td>{ baseCurrency }</td>
        <td>Editar/Excluir</td>
      </tr>
    );
  }
}
/* <th>Descrição</th>
<th>Tag</th>
<th>Método de pagamento</th>
<th>Valor</th>
<th>Moeda</th>
<th>Câmbio utilizado</th>
<th>Valor convertido</th>
<th>Moeda de conversão</th>
<th>Editar/Excluir</th> */
TableRow.propTypes = {
  expense: PropTypes.shape({
    value: PropTypes.string,
    description: PropTypes.string,
    tag: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    exchangeRates: PropTypes.shape({
      ask: PropTypes.string,
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default TableRow;
