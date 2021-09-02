import PropTypes from 'prop-types';
import React from 'react';

const Expense = ({ expense, handleDelete }) => {
  const {
    id, description, tag, method, value, coin, cambio, newValue, conversion,
  } = expense;
  return (
    <tr>
      <td>{description}</td>
      <td>{tag}</td>
      <td>{method}</td>
      <td>{value}</td>
      <td>{coin}</td>
      <td>{cambio}</td>
      <td>{newValue}</td>
      <td>{conversion}</td>
      <td>
        <button type="button" data-testid="edit-btn">Editar</button>
        <button
          onClick={ () => handleDelete(id) }
          type="button"
          data-testid="delete-btn"
        >
          Deletar
        </button>
      </td>
    </tr>
  );
};

Expense.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.string,
    cambio: PropTypes.string,
    coin: PropTypes.string,
    conversion: PropTypes.string,
    description: PropTypes.string,
    method: PropTypes.string,
    newValue: PropTypes.string,
    tag: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Expense;
