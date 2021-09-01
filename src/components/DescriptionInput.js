import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DescriptionInput extends Component {
  render() {
    const { name, handleChange, value = '' } = this.props;
    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          name={ name }
          id={ name }
          onChange={ handleChange }
          defaultValue={ value }
        />
      </label>
    );
  }
}

DescriptionInput.defaultProps = {
  value: undefined,
};

DescriptionInput.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default DescriptionInput;
