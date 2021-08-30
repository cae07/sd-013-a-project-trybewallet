import React from 'react';
import { connect } from 'react-redux';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { deleteExpense, editMode, updateTotal } from '../actions';

const delExpense = (expenseId, expenses, delExp, updtTotal) => {
  const filteredExpenses = expenses.filter((e) => e.id !== expenseId);
  delExp(filteredExpenses);
  updtTotal();
};

const editExpense = (expenseId, toggleEdit) => {
  toggleEdit({ status: true, id: expenseId });
};

const renderExpenses = (props) => {
  const { expenses: exp, delExp, updtTotal, toggleEdit, editStatus = {} } = props;
  return exp.map(({ id, description, tag, method, value, currency, exchangeRates }) => {
    const val = parseFloat(value);
    const ask = parseFloat(exchangeRates[currency].ask);
    return (
      <tr key={ id }>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{`${val}`}</td>
        <td>{exchangeRates[currency].name.split('/')[0]}</td>
        <td>{`${ask.toFixed(2)}`}</td>
        <td>{`${(val * ask).toFixed(2)}`}</td>
        <td>Real</td>
        <td>
          <button
            type="button"
            data-testid="edit-btn"
            disabled={ editStatus.status }
            onClick={ () => editExpense(id, toggleEdit) }
          >
            <AiFillEdit />
          </button>
          <button
            type="button"
            data-testid="delete-btn"
            disabled={ editStatus.status }
            onClick={ () => delExpense(id, exp, delExp, updtTotal) }
          >
            <AiFillDelete />
          </button>
        </td>
      </tr>
    );
  });
};

const renderErrorMessage = ({ error }) => {
  if (error) {
    return (
      <h3 className="wallet-add-error">
        Não conseguimos acessar o servidor para a adicionar sua despesa neste momento,
        por favor tente novamente mais tarde.
      </h3>
    );
  }
};

function ExpensesTable(props) {
  return (
    <>
      <table className="wallet-table">
        <tbody>
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
          { renderExpenses(props) }
        </tbody>
      </table>
      { renderErrorMessage(props) }
    </>
  );
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  editStatus: state.wallet.editMode,
  error: state.wallet.error,
});

const mapDispatchToProps = (dispatch) => ({
  delExp: (payload) => dispatch(deleteExpense(payload)),
  updtTotal: () => dispatch(updateTotal()),
  toggleEdit: (payload) => dispatch(editMode(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
