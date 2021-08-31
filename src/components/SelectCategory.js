import React from 'react';

class SelectCategory extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="select-category">
          Tag
          <select required="required" id="select-category">
            <option name="Alimentação">Alimentação</option>
            <option name="Lazer">Lazer</option>
            <option name="Trabalho">Trabalho</option>
            <option name="Transporte">Transporte</option>
            <option name="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

export default SelectCategory;
