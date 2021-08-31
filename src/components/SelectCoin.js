import React from 'react';

class SelectCoin extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="select-coin">
          Moeda
          <select required="required" id="select-coin">
            <option name="Moeda">
              Selecione a moeda
            </option>
          </select>
        </label>
      </div>
    );
  }
}

export default SelectCoin;
