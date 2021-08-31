import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputMoeda extends Component {
  render() {
    const { onChange, moeda, tokens } = this.props;
    const keys = Object.keys(tokens);
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
            {keys
              .filter((key) => key !== 'USDT')
              .map((key, index) => (
                <option key={ index } value={ key }>
                  { key }
                </option>))}
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
