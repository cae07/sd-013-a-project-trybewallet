import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { name, value, handleChange, dataTest } = this.props;
    return (
      <input
        data-testid={ dataTest }
        type={ name }
        name={ name }
        value={ value }
        onChange={ (e) => handleChange(e) }
      />
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  dataTest: PropTypes.string.isRequired,
};

export default Input;
