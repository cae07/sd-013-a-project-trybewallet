import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ValueInput extends Component {
  render() {
    const { name, handleChange, value = '' } = this.props;
    return (
      <label htmlFor="value">
        Valor
        <input
          type="number"
          name={ name }
          id={ name }
          onChange={ handleChange }
          defaultValue={ value }
        />
      </label>
    );
  }
}

ValueInput.defaultProps = {
  value: undefined,
};

ValueInput.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ValueInput;
