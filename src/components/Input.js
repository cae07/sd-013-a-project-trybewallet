import React from 'react';
import Proptypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { onChange, datatestid, name, label } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <input
          id={ name }
          type="text"
          name={ name }
          data-testid={ datatestid }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  onChange: Proptypes.func,
  datatestid: Proptypes.string,
  name: Proptypes.string,
  label: Proptypes.string,
}.isrequired;

export default Input;
