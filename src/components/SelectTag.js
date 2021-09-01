import React from 'react';
import PropTypes from 'prop-types';

class SelectTag extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <label
        htmlFor="tag"
      >
        Tag:
        <select
          id="tag"
          onChange={ onChange }
          name="tag"
          required
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
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
