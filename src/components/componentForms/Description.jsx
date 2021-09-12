import React from 'react';
import PropTypes from 'prop-types';

class Description extends React.Component {
  render() {
    const { onChange, description } = this.props;

    return (
      <label htmlFor="input-description">
        Descrição
        <input
          type="text"
          id="input-description"
          onChange={ onChange }
          value={ description }
          name="description"
        />
      </label>
    );
  }
}

Description.propTypes = {
  description: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Description;
