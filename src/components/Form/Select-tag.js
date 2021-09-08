import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SelectTag extends Component {
  render() {
    const { selectTag, onChange } = this.props;
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" name="tag" value={ selectTag } onChange={ onChange }>
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

SelectTag.propTypes = {
  onChange: PropTypes.func,
  selectTag: PropTypes.string,
}.isRequired;

export default SelectTag;
