import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
  tableBody() {
    return (
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
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <table border="1px" width="100%">
        { this.tableBody() }
        {
          expenses.map((item) => {
            const moeda1 = parseFloat(item.exchangeRates[item.currency].ask);
            const valor1 = parseFloat(item.value);
            const multiplicar = valor1 * moeda1;
            const tabela = (
              <tbody>
                <tr key={ item.id }>
                  <td>{ item.description }</td>
                  <td>{ item.tag }</td>
                  <td>{ item.method }</td>
                  <td>{`${item.value} `}</td>
                  <td>
                    {
                      item.exchangeRates[item.currency].name
                        .replace('/Real Brasileiro', '')
                    }
                  </td>
                  <td>
                    {moeda1.toFixed(2)}
                  </td>
                  <td>
                    {multiplicar.toFixed(2)}
                  </td>
                  <td>Real</td>
                  <td>
                    <button type="button" data-testid="edit-btn">Editar</button>
                    <button type="button">Apagar</button>
                  </td>
                </tr>
              </tbody>
            );
            return tabela;
          })
        }
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequare;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Table);
