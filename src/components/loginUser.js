import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addUser } from '../actions';

class LoginUser extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.checkInputs = this.checkInputs.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  checkInputs(email, password) {
    const regex = /^\w+([.-_]?\w+)*@\w+([.-_]?\w+)*(\.\w{2,3})+$/;
    const length = 6;
    const check = password.length >= length;

    if (regex.test(email) && check) {
      return false;
    }
    return true;
  }

  render() {
    const { email, password } = this.state;
    const disabled = this.checkInputs(email, password);
    const { addEmail } = this.props;
    return (
      <form>
        <input
          type="email"
          data-testid="email-input"
          name="email"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          data-testid="password-input"
          name="password"
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ disabled }
            onClick={ () => addEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addEmail: (email) => dispatch(addUser(email)),
});

LoginUser.propTypes = {
  addEmail: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(LoginUser);
