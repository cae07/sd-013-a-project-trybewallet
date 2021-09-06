import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectTag extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <label htmlFor="tag">
        Tag:
        <select
          id="tag"
          onChange={ onChange }
          name="tag"
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer" selected>Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="transporte">transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

SelectTag.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SelectTag;
