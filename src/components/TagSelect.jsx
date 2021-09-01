import React, { Component } from 'react';

class TagSelect extends Component {
  render() {
    return (
      <label>
        Tag
        <select>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    )
  }
}

export default TagSelect;
