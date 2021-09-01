import React from 'react';
import PropTypes from 'prop-types';

class NumberInput extends React.Component {
  render() {
    const { handleChange, name, value = '' } = this.props;
    return (
      <label htmlFor={ name }>
        Valor
        <input
          type="number"
          name={ name }
          id={ name }
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

NumberInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default NumberInput;
