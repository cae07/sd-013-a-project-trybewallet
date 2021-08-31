import React, { Component } from 'react';

class TagSelect extends Component {
  render() {
    return (
      <label htmlFor="expense-tag-select">
        Tag
        <select name="tag" id="expense-tag-select">
          <option value="" checked disabled>Selecione um Categoria</option>
          <option value="food">Alimentação</option>
          <option value="leisure">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="commute">Transporte</option>
          <option value="health">Saúde</option>
          <option value="other">Outro</option>
        </select>
      </label>
    );
  }
}

export default TagSelect;
