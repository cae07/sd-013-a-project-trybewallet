import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DescriptionExpense extends Component {
  render() {
    const { name, handleChange } = this.props;
    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          name={ name }
          id={ name }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

DescriptionExpense.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default DescriptionExpense;

// Requisito 8 o amigo Vinicius Dyonisio me salvou, esta ajudando muito na adaptacao do redux.
