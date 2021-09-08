import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { deleteExpensesAction } from '../actions/index';

class Table extends React.Component {
  handlesubmit(id) {
    const { deletAction } = this.props;
    deletAction(id);
  }

  render() {
    const { expenses } = this.props;
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
          {
            expenses.map((e) => {
              const { id, currency, description, tag, method, value, exchangeRates } = e;
              return (
                <tr key={ id }>
                  <td>{ description }</td>
                  <td>{ tag }</td>
                  <td>{ method }</td>
                  <td>{ value }</td>
                  <td>{(exchangeRates[currency].name).split('/')[0]}</td>
                  <td>{ (Number(exchangeRates[currency].ask)).toFixed(2) }</td>
                  <td>{ (Number(exchangeRates[currency].ask * value)).toFixed(2) }</td>
                  <td>Real</td>
                  <td>
                    <button
                      type="button"
                      data-testid="delete-btn"
                      onClick={ () => this.handlesubmit(id) }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deletAction: (id) => dispatch(deleteExpensesAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  delete: PropTypes.func,
}.isRequired;
