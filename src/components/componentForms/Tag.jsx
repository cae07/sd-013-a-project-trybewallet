import React from 'react';
import PropTypes from 'prop-types';

class Tag extends React.Component {
  render() {
    const { tag, onChange } = this.props;

    return (
      <div className="col">
        <label
          htmlFor="input-tag"
          className="form-label"
        >
          Tag
          <select
            id="input-tag"
            onChange={ onChange }
            value={ tag }
            name="tag"
            className="form-select"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Tag;
