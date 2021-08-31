import React from 'react';
import PropTypes from 'prop-types';

class SubmitBtn extends React.Component {
  render() {
    const { name, testid, onClick, isValid } = this.props;
    return (
      <button
        date-testid={ testid }
        type="submit"
        onClick={ onClick }
        diabled={ isValid }
      >
        { name }
      </button>
    );
  }
}

SubmitBtn.propTypes = {
  name: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isValid: PropTypes.func.isRequired,
};

export default SubmitBtn;
