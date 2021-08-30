import React, { Component } from 'react';
import Proptypes from 'prop-types';

class SelectTag extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <label htmlFor="tag">
        TAG
        <select onChange={ onChange } required="required" id="tag">
          <option name="Alimentação">Alimentação</option>
          <option name="Lazer">Lazer</option>
          <option name="Trabalho">Trabalho</option>
          <option name="Transporte">Transporte</option>
          <option name="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

SelectTag.propTypes = {
  onChange: Proptypes.func,
}.isrequired;

export default SelectTag;
