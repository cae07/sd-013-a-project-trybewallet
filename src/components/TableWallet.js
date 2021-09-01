import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// expenses: [
//   {
//     id: 0,
//     value: '',
//     description: '',
//     currency: 'USD',
//     method: 'Dinheiro',
//     tag: 'Alimentação',
//     exchangeRates: {}
//   }]
function TableWallet({ expenses }) {
  return (
    <table className="pure-table pure-table-horizontal" width="100%">
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
        {expenses.map((item) => (
          <tr key={ item.id }>
            <td>{item.description}</td>
            <td>{item.tag}</td>
            <td>{item.method}</td>
            <td>{item.value}</td>
            <td>{item.exchangeRates[item.currency].name.split('/')[0]}</td>
            <td>{(item.exchangeRates[item.currency].ask * 1).toFixed(2)}</td>
            <td>
              {(item.exchangeRates[item.currency].ask * item.value).toFixed(2)}
            </td>
            <td>Real</td>
            <td>Editar/Excluir</td>

          </tr>
        ))}

      </tbody>
    </table>

  );
}

TableWallet.propTypes = {
  expenses: PropTypes.arrayOf(),
};

TableWallet.defaultProps = {
  expenses: [{}],
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});
export default connect(mapStateToProps)(TableWallet);
