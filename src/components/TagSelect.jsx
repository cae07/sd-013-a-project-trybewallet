import React, { Component } from 'react';

class TagSelect extends Component {
  render() {
    return (
      <label htmlFor="tags">
        Tag:
        <select id="tags">
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }
}

export default TagSelect;
