import React, { Component } from 'react';

class ValueInput extends Component {
  render() {
    const { handleChange, valueCost } = this.props;
    return (
      <label htmlFor="value">
        Valor
        <input
          type="number"
          name="value"
          id="value"
          value={ valueCost }
          onChange={ (e) => handleChange(e) }
        />
      </label>
    );
  }
}

export default ValueInput;
