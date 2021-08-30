import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { type, name, value, placeholder, datatestid } = this.props;
    return (
      <input
        type={ type }
        name={ name }
        value={ value }
        placeholder={ placeholder }
        data-testid={ datatestid }
      />
    );
  }
}

Input.propTypes = {
  datatestid: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default Input;
