// React
import React, { Component } from 'react';

// PropTypes
import PropTypes from 'prop-types';

class TagSelect extends Component {
  render() {
    const { props: { handleChange, defaultValue } } = this;
    return (
      <label htmlFor="expense-tag-select">
        Tag
        <select
          name="tag"
          id="expense-tag-select"
          onChange={ (evt) => handleChange(evt) }
          defaultValue={ defaultValue }
        >
          <option value="" disabled>Selecione um Categoria</option>
          <option value="Alimentação" checked>Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
          <option value="Outro">Outro</option>
        </select>
      </label>
    );
  }
}

TagSelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
};

export default TagSelect;
