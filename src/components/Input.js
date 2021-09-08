import React from 'react';
import Proptypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { handleChange, name, label, value } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          { label }
          <input
            value={ value }
            id= { name }
            name={ name }
            data-testid={ `${name}-input` }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  handleChange: Proptypes.func,
  datatestid: Proptypes.string,
  name: Proptypes.string,
  label: Proptypes.string,
}.isrequired;

export default Input;
