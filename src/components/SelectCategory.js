import PropTypes from 'prop-types';
import React from 'react';

class SelectCategory extends React.Component {
  render() {
    const { tag, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="select-category">
          Tag
          <select
            required="required"
            id="select-category"
            name="tag"
            onChange={ handleChange }
            value={ tag }
          >
            <option name="Alimentação">Alimentação</option>
            <option name="Lazer">Lazer</option>
            <option name="Trabalho">Trabalho</option>
            <option name="Transporte">Transporte</option>
            <option name="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

SelectCategory.propTypes = {
  handleChange: PropTypes.func,
  tag: PropTypes.string,
}.isRequired;

export default SelectCategory;
