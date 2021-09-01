import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TextInput extends React.Component {
  render() {
    const { value, id, onChange, label } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        <input
          id={ id }
          type="text"
          value={ value }
          onChange={ (e) => onChange(e.target) }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default connect()(TextInput);
