import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ValueInput extends Component {
  render() {
    const { name, handleChange } = this.props;
    return (
      <label htmlFor="value">
        Valor
        <input
          type="number"
          name={ name }
          id={ name }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ValueInput.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ValueInput;
