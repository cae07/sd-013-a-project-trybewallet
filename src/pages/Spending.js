import PropTypes from 'prop-types';
import React from 'react';

class Spending extends React.Component {
  render() {
    const { expense } = this.props;
    const { description, tag, method, value, exchangeRates, currency } = expense;
    const exchange = Number(exchangeRates[currency].ask);
    const converted = exchange * Number(value);
    const indexBarra = exchangeRates[currency].name.indexOf('/');
    const setName = exchangeRates[currency].name.substr(0, indexBarra);
    let name = (currency === 'USD') ? 'Dólar Comercial' : setName;
    name = (currency === 'EUR') ? 'Euro' : name;

    return (
      <tr>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ value }</td>
        <td>{ name }</td>
        <td>{ exchange.toFixed(2) }</td>
        <td>{ converted.toFixed(2) }</td>
        <td>Real</td>
        <td>
          <button data-testid="" type="submit">Editar</button>
          <button data-testid="" type="submit">Excluir</button>
        </td>
      </tr>
    );
  }
}

Spending.propTypes = {
  expense: PropTypes.shape({
    description: PropTypes.string,
    method: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    value: PropTypes.string,
  }),
}.isRequired;

export default Spending;
