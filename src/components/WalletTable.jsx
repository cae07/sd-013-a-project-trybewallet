import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem } from '../actions';

class WalletTable extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(param) {
    const { deleteEach } = this.props;
    deleteEach(param);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table className="table-wallet">
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

        {/* Rogério deu a moral de como fazer esse map com o table. */}
        <tbody>
          {expenses.map((each) => (
            <tr key={ each.id }>
              <td>{each.description}</td>
              <td>{each.tag}</td>
              <td>{each.method}</td>
              <td>{each.value}</td>
              <td>{each.exchangeRates[each.currency].name}</td>
              <td>{(each.exchangeRates[each.currency].ask * 1).toFixed(2)}</td>
              <td>{(each.exchangeRates[each.currency].ask * each.value).toFixed(2)}</td>
              <td>Real</td>
              <td>
                <button type="submit">Editar</button>
                <button
                  data-testid="delete-btn"
                  type="submit"
                  onClick={ () => this.handleClick(each.id) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteEach: (state) => dispatch(deleteItem(state)),
});

WalletTable.propTypes = {
  deleteEach: PropTypes.func,
  expenses: PropTypes.arrayOf(),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletTable);
