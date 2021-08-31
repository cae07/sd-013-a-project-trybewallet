import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DescriptionInput extends Component {
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

DescriptionInput.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default DescriptionInput;
