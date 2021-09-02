import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deleteExpense, editMode, totalUpdate } from '../actions';

class TableExpenses extends React.Component {
  componentDidUpdate() {
    const { totalDidUpdate } = this.props;
    totalDidUpdate();
  }

  addList() {
    const { listExpenses, deleteExp, editExp, edit } = this.props;
    return listExpenses
      .map(({ description, tag, method, value, currency, exchangeRates, id }) => {
        const valNumber = parseFloat(value);
        const atualValue = parseFloat(exchangeRates[currency].ask);
        const currencyConvert = (atualValue * valNumber).toFixed(2);
        return (
          <tr key={ id }>
            <td>{id + 1}</td>
            <td>{description}</td>
            <td>{tag}</td>
            <td>{method}</td>
            <td>{valNumber}</td>
            <td>{exchangeRates[currency].name.split('/')[0]}</td>
            <td>{atualValue.toFixed(2)}</td>
            <td>{currencyConvert}</td>
            <td>Real</td>
            <td>
              <input
                type="button"
                data-testid="edit-btn"
                className="btn btn-small btn-primary mr-3"
                value="Editar"
                disabled={ edit.status }
                onClick={ () => editExp(edit.status, id) }
              />
              <input
                type="button"
                data-testid="delete-btn"
                className="btn btn-small btn-danger"
                value="Excluir"
                disabled={ edit.status }
                onClick={ () => deleteExp(id) }
              />
            </td>
          </tr>
        );
      });
  }

  render() {
    return (
      <div className="col-md-10 mx-auto">
        <table className="table table-hover">
          <thead className="text-white bg-dark text-center">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Descrição</th>
              <th scope="col">Tag</th>
              <th scope="col">Método de pagamento</th>
              <th scope="col">Valor</th>
              <th scope="col">Moeda</th>
              <th scope="col">Câmbio utilizado</th>
              <th scope="col">Valor convertido</th>
              <th scope="col">Moeda de conversão</th>
              <th scope="col">Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {this.addList()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteExp: (id) => dispatch(deleteExpense(id)),
  editExp: (status, id) => dispatch(editMode(status, id)),
  totalDidUpdate: () => dispatch(totalUpdate()),
});

const mapStateToProps = ({ wallet }) => (
  {
    listExpenses: wallet.expenses,
    edit: wallet.edit,
  });

TableExpenses.propTypes = {
  totalDidUpdate: PropTypes.func.isRequired,
  editExp: PropTypes.func.isRequired,
  deleteExp: PropTypes.func.isRequired,
  listExpenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    exchangeRates: PropTypes.objectOf(PropTypes.object).isRequired,
  })).isRequired,
  edit: PropTypes.shape({
    status: PropTypes.bool,
  }),
};

TableExpenses.defaultProps = {
  edit: { status: false },
};
export default connect(mapStateToProps, mapDispatchToProps)(TableExpenses);
