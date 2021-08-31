import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { text, value, onChange, id, type } = this.props;
    return (
      <label htmlFor={ id }>
        { text }
        <input
          type={ type }
          id={ id }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Input;
