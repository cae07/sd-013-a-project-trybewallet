import React from 'react';
import PropTypes from 'prop-types';
import htmlID from './util/util';

class SubmitBtn extends React.Component {
  render() {
    const { name, testid, onClick, isValid } = this.props;
    return (
      <button
        date-testid={ testid }
        type="submit"
        onClick={ onClick }
        disabled={ !isValid }
      >
        { name }
      </button>
    );
  }
}

SubmitBtn.propTypes = {
  name: PropTypes.string.isRequired,
  testid: PropTypes.string,
  onClick: PropTypes.func,
  isValid: PropTypes.bool,
};

SubmitBtn.defaultProps = {
  testid: htmlID({ name: 'btn' }),
  onClick: (e) => e.preventDefault(),
  isValid: true,
};

export default SubmitBtn;
