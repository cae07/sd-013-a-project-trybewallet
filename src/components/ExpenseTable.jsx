import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class ExpenseTable extends React.Component {
  constructor() {
    super();
    this.renderRows = this.renderRows.bind(this);
    this.fncDelete = this.fncDelete.bind(this);
    this.fncEdit = this.fncEdit.bind(this);
  }

  fncDelete() {}

  fncEdit() {}

  renderRows(array) {
    // Além do return do map, o map é o retorno da função, logo,
    // importante lembrar que é necessário colocar o "return" na linha 18, retornando o retorno do map.
    return array.map((expense) => {
      const { value, currency, method, tag, description, exchangeRates } = expense;
      const { ask, name } = exchangeRates[currency];
      const nameCurrency = name.split('/')[0];
      // const brlCurrency = name.split('/')[1]; //Apesar de possível não passa no teste.
      const valueWithDot = value.replace(/,/g, '.');
      const valorConvertido = parseFloat(valueWithDot) * parseFloat(ask);
      return (
        <tr key={ `${value}-${currency}-${description}` }>
          <td>{ description }</td>
          <td>{ tag }</td>
          <td>{ method }</td>
          <td>{ value }</td>
          <td>{nameCurrency}</td>
          <td>{parseFloat(ask).toFixed(2)}</td>
          <td>{ valorConvertido.toFixed(2) }</td>
          <td>Real</td>
          <td>
            <button type="button" onClick={ this.fncEdit }>Editar</button>
            <button
              type="button"
              data-testid="delete-btn"
              onClick={ this.fncDelete }
            >
              Excluir
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    const { wallet: { expenses } } = this.props;
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
          { this.renderRows(expenses)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

ExpenseTable.propTypes = {
  wallet: propTypes.shape({
    expenses: propTypes.objectOf(propTypes.string),
  }).isRequired,
};

export default connect(mapStateToProps)(ExpenseTable);
