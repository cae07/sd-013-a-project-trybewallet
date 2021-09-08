import React from 'react';

class SelectCurrency extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="select-currency">
          Moeda
          <select id="select-currency">
            <option>
              Moedas
            </option>
          </select>
        </label>
      </div>
    );
  }
}

export default SelectCurrency;
