import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  render() {
    const { label, handleChange, name, placeholder } = this.props;
    return (
      <label htmlFor={ name }>
        {label}
        <input
          onChange={ handleChange }
          name={ name }
          type="text"
          placeholder={ placeholder }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  label: PropTypes.string,
}.isRequired;
export default TextInput;
