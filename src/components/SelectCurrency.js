import React from 'react';

class SelectCurrency extends React.Component {
  render() {
    return (
      <label htmlFor="currency">
        Moeda
        <select name="currency" id="currency">
          {/* Aqui terá o map com a API */}
          <option value="nenhum">Nadica por enquanto</option>
        </select>
      </label>
    );
  }
}

export default SelectCurrency;
