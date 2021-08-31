import React from 'react';

class SelectsWallet extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            name="currency"
          >
            <option>Empty</option>
          </select>

        </label>
        <label htmlFor="tag">
          Tag:
          <select
            id="tag"
            name="tag"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SelectsWallet;
