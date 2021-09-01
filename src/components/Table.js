import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends React.Component {
  render() {
    const { wallet } = this.props;
    const { expenses } = wallet;
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
          {expenses.map((e) => (
            <tr key={ e.id }>
              <td>{e.description}</td>
              <td>{e.tag}</td>
              <td>{e.method}</td>
              <td>{(Math.round(e.value * 100) / 100)}</td>
              <td>{expenses[e.id].exchangeRates[e.currency].name.split('/')[0]}</td>
              <td>
                {Math.round((expenses[e.id].exchangeRates[e.currency].ask) * 100) / 100}
              </td>
              <td>
                {(e.value * expenses[e.id].exchangeRates[e.currency].ask).toFixed(2)}
              </td>
              <td>Real</td>
            </tr>
          ))}
        </tbody>

      </table>
    );
  }
}

Table.propTypes = {
  wallet: PropTypes.shape({
    currencies: PropTypes.shape({
      code: PropTypes.string,
      codein: PropTypes.string,
      name: PropTypes.string,
      high: PropTypes.number,
      low: PropTypes.number,
      varBid: PropTypes.number,
      pctChange: PropTypes.number,
      bid: PropTypes.number,
      ask: PropTypes.number,
      timestamp: PropTypes.number,
      create_date: PropTypes.string,
    }).isRequired,
    expenses: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
      description: PropTypes.string,
      currency: PropTypes.string,
      method: PropTypes.string,
      tag: PropTypes.string,
    })).isRequired,
    exchangeRates: PropTypes.shape({
      code: PropTypes.string,
      codein: PropTypes.string,
      name: PropTypes.string,
      high: PropTypes.number,
      low: PropTypes.number,
      varBid: PropTypes.number,
      pctChange: PropTypes.number,
      bid: PropTypes.number,
      ask: PropTypes.number,
      timestamp: PropTypes.number,
      create_date: PropTypes.string,
    }),
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

export default connect(mapStateToProps, null)(Table);
