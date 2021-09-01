import React from 'react';
import PropTypes from 'prop-types';

class FormValues extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="value">
        Valor:
        <input
          id="value"
          type="number"
          name="value"
          onChange={ handleChange }
          value={ value }
        />
      </label>
    );
  }
}

FormValues.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FormValues;
