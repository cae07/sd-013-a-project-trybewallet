import React from 'react';
import PropTypes from 'prop-types';

class Description extends React.Component {
  render() {
    const { onChange, description } = this.props;

    return (
      <div className="col">
        <label
          htmlFor="input-description"
          className="form-label"
        >
          Descrição
          <input
            type="text"
            id="input-description"
            onChange={ onChange }
            value={ description }
            name="description"
            className="form-control"
          />
        </label>
      </div>
    );
  }
}

Description.propTypes = {
  description: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Description;
