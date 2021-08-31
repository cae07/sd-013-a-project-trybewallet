import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { type, name, value, placeholder, datatestid, onChange } = this.props;
    return (
      <input
        type={ type }
        name={ name }
        value={ value }
        placeholder={ placeholder }
        onChange={ onChange }
        data-testid={ datatestid }
        required
      />
    );
  }
}

Input.propTypes = {
  datatestid: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default Input;
