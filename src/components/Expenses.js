import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import expensesType from '../proptypes';
import ExpenseRow from './ExpenseRow';

class Expenses extends React.Component {
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
          {expenses.map((expense, idx) => <ExpenseRow key={ idx } expense={ expense } />)}
        </tbody>
        <tfoot />
      </table>
    );
  }
}

Expenses.propTypes = {
  currencies: PropTypes.shape({ find: PropTypes.func }).isRequired,
  expenses: expensesType.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Expenses);
