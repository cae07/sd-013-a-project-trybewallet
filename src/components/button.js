import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { userAction } from '../actions/index';

class Button extends React.Component {
  handleSubmit(email, actionUser) {
    actionUser(email);
  }

  render() {
    const { email, disabled, actionUser } = this.props;
    return (
      <Link to="carteira">
        <button
          type="button"
          disabled={ disabled }
          onClick={ () => this.handleSubmit(email, actionUser) }
        >
          Entrar
        </button>
      </Link>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actionUser: (email) => dispatch(userAction(email)),
});

export default connect(null, mapDispatchToProps)(Button);

Button.propTypes = {
  email: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  actionUser: PropTypes.func.isRequired,
};
