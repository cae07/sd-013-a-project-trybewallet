import React, { Component } from 'react';
import Proptypes from 'prop-types';

class SelectCoin extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <label htmlFor="coin">
        Moeda
        <select onChange={ onChange } required="required" id="coin">
          <option name="Moeda">Moeda</option>
        </select>
      </label>
    );
  }
}

SelectCoin.propTypes = {
  onChange: Proptypes.func,
}.isrequired;

export default SelectCoin;
