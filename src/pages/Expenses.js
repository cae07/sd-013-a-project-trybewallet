import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import NewExpense from './NewExpense';

class Expenses extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <table id="expenses-table">
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
        { expenses.map((exp) => <NewExpense key={ exp.id } expense={ exp } />) }
      </table>
    );
  }
}

Expenses.propTypes = {
  expenses: PropTypes.arrayOf(),
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Expenses);
