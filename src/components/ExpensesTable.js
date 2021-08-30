import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Importa o connect para realizar a conexão entre o mapStateToProps e o mapDispatchToProps com o componente Header
import { connect } from 'react-redux';

// importo do react icons ícones para serem utilizados para deletar e excluir expenses
import { RiDeleteBinLine, RiEditLine } from 'react-icons/ri';

// Importo as actions de Deletar e Editar Expenses/Despesas, e as renomeio para melhor trabalhar nelas
import {
  actionDeleteExpense as eraseExpense,
  actionEditExpense as modifyExpense,
} from '../actions';

class ExpensesTable extends Component {
  // Crio a função renderButton para ser acessada clicar nos botões de Edit e Delete
  // A função abaixo vai ser executada conforme parametros passados
  // "name" pode ser: "edit" ou "delete"
  // "expense" é a despesa
  // "callback" pode ser: "editExpense" ou "deleteExpense". Ambas acionam na mapDispatchToProps uma action de edit e outra para deletar.
  renderButton(name, expense, callback) {
    return (
      <button
        type="button"
        data-testid={ `${name}-btn` }
        onClick={ () => callback(expense) }
        className={ `${name}-btn expense-opt-btn` }
      >
        {/* Se o name for "edit" aparece ícone de Editar */}
        {/* Se o name não for "edit" aparece ícone de Deletar */}
        {name === 'edit' ? <RiEditLine /> : <RiDeleteBinLine />}
      </button>
    );
  }

  render() {
    // A "expenses" foi criada pela função mapStateToProps fazendo a leitura do state e pegando as expenses que estão no estado global
    // A "deleteExpense" e a "editExpense" foi criada pelo mapDispatchToProps acionando dispatchs nas actions e edição e exclusão de expenses e retornando resultado na props
    const { expenses, deleteExpense, editExpense } = this.props;

    return (
      <table>
        <thead className="table-header">
          <tr>
            <th>Moeda</th>
            <th>Valor</th>
            <th>Câmbio utilizado</th>
            <th>Moeda de conversão</th>
            <th>Valor convertido</th>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {expenses.map((expense, index) => {
            // Desconstroi a expense com todas as propriedades necessárias para montar a tabela
            const { description, tag, method, value, currency, exchangeRates } = expense;
            // Desconstroi as propriedades name e ask que estão dentro da exchangeRates desconstruída na linha acima
            const { name, ask } = exchangeRates[currency];

            return (
              <tr key={ index }>
                <td>{name}</td>
                <td>{value}</td>
                <td>{parseFloat(ask).toFixed(2)}</td>
                <td>Real</td>
                <td>{(ask * parseInt(value, 10)).toFixed(2)}</td>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>
                  {this.renderButton('edit', expense, editExpense)}
                  {this.renderButton('delete', expense, deleteExpense)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

// A função mapStateToProps mapeia as states armazenadas na store para uma props
// Ou seja, no caso abaixo eu acessei o reducer wallet para acessar a expenses
// E coloquei na props expenses abaixo nas chaves
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

// A função do mapDispatchToProps é despachar action para a store, com a finalidade de alterar o state da aplicação
// A função dispatch() serve para despachar uma action para o reducer.
// Recebe como parametro uma dispatch, e retorna um objeto com chave e valor.
const mapDispatchToProps = (dispatch) => ({
  // A chave(deleteExpense) é a prop do componente que vai ser envocada
  // E eu passo uma callback que vai ser o dispatch que vou realizar
  // O parametro eu passo a própria expense
  // O retorno desse disparo será o novo valor dessa chave deleteExpense
  deleteExpense: (expense) => dispatch(eraseExpense(expense)),
  editExpense: (expense) => dispatch(modifyExpense(expense)),
});

// Faço a validação se os dados que recebi são válidos
ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  deleteExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
};

// Bem semelhante ao propTypes, eu utilizo o defaultProps para definir um comportamento default, para quando uma propriedade não for informada receber algum valor em especial, no caso abaixo, a chave expenses receber um array vazio.
ExpensesTable.defaultProps = {
  expenses: [],
};

// Faço a conexão do mapStateToProps e mapDispatchToProps com o componente ExpensesTable
export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
