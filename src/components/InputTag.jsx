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
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trasbalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
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
