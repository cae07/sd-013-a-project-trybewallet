import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectType extends Component {
  render() {
    const {
      value,
      onChange,
    } = this.props;

    return (
      <label htmlFor="tag">
        Tag
        <select value={ value } id="tag" onChange={ onChange }>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }
}

SelectType.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default SelectType;
