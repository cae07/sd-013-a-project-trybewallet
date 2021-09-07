import React from 'react';

class TagSelect extends React.Component {
  render() {
    return (
      <label htmlFor="tag">
        Tag:
        <select
          id="tag"
          onChange={ ({ target }) => this.setState({ tag: target.value }) }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

export default TagSelect;
