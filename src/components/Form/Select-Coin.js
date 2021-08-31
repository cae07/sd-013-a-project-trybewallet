import React, { Component } from 'react';

class SelectCoin extends Component {
  render() {
    return (
      <label htmlFor="moeda">
        Moeda
        <select id="moeda">
          <option>opção 1</option>
        </select>
      </label>
    );
  }
}

export default SelectCoin;
