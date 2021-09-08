import React from 'react';

class SelectPayment extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="select-tag">
          Tag
          <select id="select-tag">
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

export default SelectPayment;
