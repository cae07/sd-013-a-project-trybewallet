import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends React.Component {
  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <table id="expense-table">
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
          {expenses.map(({
            id, value, description, currency, method, tag, exchangeRates }) => {
            const coin = exchangeRates[currency];
            const currencyName = (coin.name).split('/');
            const currencyNameShort = currencyName[0];
            const convertedValue = (parseFloat(coin.ask) * parseFloat(value));
            const roundedConvertedValue = convertedValue.toFixed(2);
            const roundedCoin = parseFloat(coin.ask).toFixed(2);
            return (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>{currencyNameShort}</td>
                <td>{roundedCoin}</td>
                <td>{roundedConvertedValue}</td>
                <td>Real</td>
                <td>Botões</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
