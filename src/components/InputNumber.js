import React from 'react';
import Proptypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const { onChange, datatestid, name, label } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <input
          id={ name }
          type="number"
          placeholder="0.00"
          name={ name }
          data-testid={ datatestid }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  onChange: Proptypes.func,
  datatestid: Proptypes.string,
  name: Proptypes.string,
  label: Proptypes.string,
}.isrequired;

export default InputNumber;
