import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTag extends Component {
  render() {
    const { tag, onChange } = this.props;
    return (
      <div>
        <label
          htmlFor="tag"
        >
          Tag
          <select name="tag" value={ tag } onChange={ onChange } id="tag">
            <option value="Alimentacao">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saude">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

InputTag.propTypes = {
  onChange: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
};

export default InputTag;
