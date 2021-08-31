import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputMoeda extends Component {
  render() {
    const { onChange, moeda } = this.props;
    return (
      <div>
        <label
          htmlFor="input-moeda"
        >
          Moeda
          <select
            name="moeda"
            value={ moeda }
            onChange={ onChange }
            id="input-moeda"
          >
            Moeda
          </select>
        </label>
      </div>
    );
  }
}

InputMoeda.propTypes = {
  onChange: PropTypes.func.isRequired,
  moeda: PropTypes.string.isRequired,
};

export default InputMoeda;
