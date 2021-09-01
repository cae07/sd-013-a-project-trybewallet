import React, { Component } from 'react';
import { connect } from 'react-redux';

class Tabela extends Component {
  render() {
    const { despesas } = this.props;
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
          { despesas.map((desp, index) => (
            <tr key={ index }>
              <td>{desp.description}</td>
              <td>{desp.tag}</td>
              <td>{desp.method}</td>
              <td>{desp.value}</td>
              <td>{desp.exchangeRates[desp.currency].name === 'Dólar Americano/Real Brasileiro' ? 'Dólar Comercial' : desp.exchangeRates[desp.currency].name.split('/', 1)}</td>
              <td>{Number(desp.exchangeRates[desp.currency].ask).toFixed(2)}</td>
              <td>
                {
                  (Number(desp.exchangeRates[desp.currency].ask) * Number(desp.value)
                  ).toFixed(2)
                }
              </td>
              <td>Real</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  despesas: state.wallet.expenses,
});

export default connect(mapStateToProps)(Tabela);
