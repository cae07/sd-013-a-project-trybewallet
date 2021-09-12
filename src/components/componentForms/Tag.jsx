import React from 'react';
import PropTypes from 'prop-types';

class Tag extends React.Component {
  render() {
    const { tag, onChange } = this.props;

    return (
      <label htmlFor="input-tag">
        Tag
        <select
          id="input-tag"
          onChange={ onChange }
          value={ tag }
          name="tag"
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Tag;
