import React from 'react';
import PropTypes from 'prop-types';

class SpendingReason extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label htmlFor="input-why">
        Tag
        <select
          onChange={ onChange }
          name="tag"
          value={ value }
          id="input-why"
        >
          <option value="">escolha</option>
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

SpendingReason.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SpendingReason;
