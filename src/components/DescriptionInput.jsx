import React, { Component } from 'react';

class DescriptionInput extends Component {
  render() {
    const { handleChange, descriptionValue } = this.props;
    return (
      <label htmlFor="description">
        Descrição
        <input type="text" name="description" id="description" value={ descriptionValue } onChange={ handleChange } />
      </label>
    );
  }
}

export default DescriptionInput;
