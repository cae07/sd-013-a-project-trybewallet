import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Input extends Component {
  render() {
    const { dataTestid, name, type, placeholder, value, onChange } = this.props;

    return (
      <label className="Input" htmlFor={ name } placeholder={ `${name}` }>
        <input
          data-testid={ dataTestid }
          name={ name }
          onChange={ onChange }
          placeholder={ placeholder }
          type={ type }
          value={ value }
        />
      </label>
    );
  }
}

Input.propTypes = {
  dataTestid: Proptypes.string,
  name: Proptypes.string,
  onChange: Proptypes.func,
  placeholder: Proptypes.string,
  type: Proptypes.string,
  value: Proptypes.string,
}.isRequired;

export default Input;
