import React from 'react';
import PropTypes from 'prop-types';

class ExpenseTag extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="tag">
        Tag
        <select
          label="tag"
          id="tag"
          name="tag"
          value={ value }
          onChange={ handleChange }
        >
          <option value="" disabled selected>Escolha</option>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }
}

ExpenseTag.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default ExpenseTag;
