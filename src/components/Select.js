import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TextInput extends React.Component {
  render() {
    const { value, id, onChange, label, items } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        <select
          id={ id }
          type="text"
          value={ value }
          onChange={ (e) => onChange(e.target) }
        >
          {items.map((item, i) => (
            <option key={ i } value={ item }>{item}</option>)) }
        </select>
      </label>
    );
  }
}

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect()(TextInput);
