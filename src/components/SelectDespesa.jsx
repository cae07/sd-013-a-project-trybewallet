import React from 'react';
import PropTypes from 'prop-types';

class SelectDespesa extends React.Component {
  render() {
    return (
      <label htmlFor="despesa-input">
        Tag:
        <select id="despesa-input">
          <option value="alimentacao"> Alimentação </option>
          <option value="lazer"> Lazer </option>
          <option value="trabalho"> Trabalho </option>
          <option value="transporte"> Transporte </option>
          <option value="saude"> Saúde </option>
        </select>
      </label>
    );
  }
}

SelectDespesa.propTypes = {
  value: PropTypes.string,
}.isRequired;

export default SelectDespesa;
