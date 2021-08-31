import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteRow } from '../actions';

class WalletTable extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(itemId) {
    const { deleteSpent } = this.props;
    deleteSpent(itemId);
  }

  renderTableHead() {
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
      <table>
        {this.renderTableHead()}
        <tbody>
          {expenses.map((item) => (
            <tr key={ item.id } style={ { textAlign: 'center' } }>
              <td>{item.description}</td>
              <td>{item.tag}</td>
              <td>{item.method}</td>
              {/* <td>{`${item.currency} ${parseInt(item.value, 10).toFixed(2)}`}</td> */}
              <td>{item.value}</td>
              <td>{item.exchangeRates[item.currency].name.split('/')[0]}</td>
              {/* <td>
                {`R$ ${parseFloat(item
                  .exchangeRates[item.currency].ask).toFixed(2)}`}
              </td> */}
              <td>{`${parseFloat(item.exchangeRates[item.currency].ask).toFixed(2)}`}</td>
              {/* <td>
                {`R$ ${(item
                  .exchangeRates[item.currency].ask * item.value).toFixed(2)}`}
              </td> */}
              <td>
                {`${(item
                  .exchangeRates[item.currency].ask * item.value).toFixed(2)}`}
              </td>
              {/* <td>{item.exchangeRates[item.currency].name.split('/')[1]}</td> */}
              <td>Real</td>
              <td>
                <button
                  onClick={ () => this.handleDelete(item.id) }
                  data-testid="delete-btn"
                  type="button"
                >
                  Apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

WalletTable.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteSpent: (payload) => dispatch(deleteRow(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletTable);
