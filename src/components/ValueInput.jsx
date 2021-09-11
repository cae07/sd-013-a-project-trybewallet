import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ValueInput extends Component {
  render() {
    const { handleChange, valueCost } = this.props;
    return (
      <label htmlFor="value">
        Valor
        <input
          type="number"
          name="value"
          id="value"
          value={ valueCost }
          onChange={ (e) => handleChange(e) }
        />
      </label>
    );
  }
}

ValueInput.propTypes = {
  valueCost: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ValueInput;
