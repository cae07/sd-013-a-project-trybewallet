import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '.';
import { deleteExpense } from '../actions';

class Tbody extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target }) {
    const { remove } = this.props;
    const expenseID = parseInt(target.name, 10);
    remove(expenseID);
  }

  render() {
    const { getExpenses } = this.props;

    return (
      <>
        {getExpenses.map((expense) => {
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
                <Button
                  type="button"
                  name={ id }
                  testID="delete-btn"
                  onClick={ this.handleClick }
                  text="Excluir"
                />
              </td>
              <p>{id}</p>
            </tr>
          );
        })}
      </>
    );
  }
}

const { arrayOf, object } = PropTypes;

Tbody.propTypes = {
  getExpenses: arrayOf(object),
}.isRequired;

const mapStateToProps = (state) => ({
  getExpenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (expenseID) => dispatch(deleteExpense(expenseID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tbody);
