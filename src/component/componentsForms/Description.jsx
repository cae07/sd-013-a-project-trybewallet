import React from 'react';
import PropTypes from 'prop-types';

class Description extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label htmlFor="input-description">
        Descrição
        <input
          onChange={ onChange }
          name="description"
          value={ value }
          type="text"
          id="input-description"
        />
      </label>
    );
  }
}

Description.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Description;
