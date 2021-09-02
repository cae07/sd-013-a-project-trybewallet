import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectType extends Component {
  render() {
    const {
      onChange,
    } = this.props;

    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" onChange={ onChange }>
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
}.isRequired;

export default SelectType;
