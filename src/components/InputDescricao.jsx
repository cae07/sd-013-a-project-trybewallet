import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputDescricao extends Component {
  render() {
    const { onChange, descricao } = this.props;
    return (
      <div>
        <label htmlFor="input-descricao">
          Descrição
          <input
            type="text"
            onChange={ onChange }
            value={ descricao }
            id="input-descricao"
            name="description"
          />
        </label>
      </div>
    );
  }
}

InputDescricao.propTypes = {
  onChange: PropTypes.func.isRequired,
  descricao: PropTypes.string.isRequired,
};

export default InputDescricao;
