import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TableBody extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(target, handleData) {
  }

  render() {
    const { expenses } = this.props;
    return (
      <>
        {expenses.map((expense) => {
          const { paymentId, currency, description,
            tag, type, value, exchangeRates } = expense;
          return (
            <tr key={ paymentId }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{type}</td>
              <td>{value}</td>
              <td>{(exchangeRates[currency].name).split('/')[0]}</td>
              <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
              <td>{Number(exchangeRates[currency].ask * value).toFixed(2)}</td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="edit-btn"
                  name="edit"
                  onClick={ ({ target }) => this.handleClick(target, expense) }
                >
                  Editar
                </button>
                <button
                  type="button"
                  name="delete"
                  data-testid="delete-btn"
                  onClick={ ({ target }) => this.handleClick(target, paymentId) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          );
        })}
      </>
    );
  }
}

TableBody.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  removeExpense: PropTypes.func,
  selectExpenseAct: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(TableBody);
