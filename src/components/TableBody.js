import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deletePayment } from '../actions';

class TableBody extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(target, paymentData) {
    const { remove } = this.props;
    if (target.name === 'delete') {
      remove(paymentData);
    }
  }

  render() {
    const { expenses } = this.props;
    return (
      <>
        {expenses.map((expense) => {
          const {
            id,
            currency,
            description,
            tag,
            method,
            value,
            exchangeRates,
          } = expense;
          return (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
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
                  onClick={ ({ target }) => this.handleClick(target, id) }
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
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  remove: PropTypes.func,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(deletePayment(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);
