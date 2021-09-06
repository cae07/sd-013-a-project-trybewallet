import React from 'react';
import Proptypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { onChange, name, label } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          { label }
          <input
            type={ name }
            name={ name }
            data-testid={ `${name}-input` }
            onChange={ onChange }
          />
        </label>
      </div>
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