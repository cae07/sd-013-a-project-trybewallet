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
          name="reason"
          value={ value }
          id="input-why"
        >
          <option value="">escolha</option>
          <option value="food">Alimentação</option>
          <option value="play">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="transport">Transporte</option>
          <option value="health">Saúde</option>
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
