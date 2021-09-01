import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TagInput extends Component {
  render() {
    const { handleChange, value = '' } = this.props;
    const tagArray = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <label htmlFor="tag">
        Tag
        <select
          name="tag"
          id="tag"
          onChange={ handleChange }
          defaultValue={ value }
        >
          {
            tagArray.map((tag, index) => <option key={ index }>{tag}</option>)
          }
        </select>
      </label>
    );
  }
}

TagInput.defaultProps = {
  value: undefined,
};

TagInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default TagInput;
