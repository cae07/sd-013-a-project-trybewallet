import React, { Component } from 'react';

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

export default Input;
