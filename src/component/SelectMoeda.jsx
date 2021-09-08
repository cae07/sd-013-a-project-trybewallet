import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectMoeda extends Component {
  render() {
    const { currencies, handleChange } = this.props;
    return (
      <label htmlFor="currency">
        Moeda
        <select name="currency" id="currency" onChange={ handleChange }>
          { currencies && Object.keys(currencies)
            .map((key, index) => {
              if (key !== 'USDT') {
                return <option key={ index }>{ key }</option>;
              }
              return null;
            })}
        </select>
      </label>
    );
  }
}

SelectMoeda.defaultProps = {
  currencies: [],
};

SelectMoeda.propTypes = {
  currencies: PropTypes.shape(
    {},
  ),
  handleChange: PropTypes.func.isRequired,
};

export default SelectMoeda;

// Requisito 8 o amigo Vinicius Dyonisio me salvou, esta ajudando muito na adaptacao do redux
