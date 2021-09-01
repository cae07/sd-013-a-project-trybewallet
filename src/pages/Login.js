import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
    this.addEmail = this.addEmail.bind(this);
  }

  async handleChange({ name, value }) {
    this.setState({
      [name]: value,
    });
    this.validateLogin();
  }

  // source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  validateLogin() {
    const { email, password } = this.state;
    const regex = /\S+@\S+\.\S+/;

    const PASSWORD_LENGH = 5;

    if (password.length >= PASSWORD_LENGH) {
      return this.setState({
        disabled: !regex.test(email),
      });
    }
    return this.setState({ disabled: true });
  }

  addEmail() {
    const { email } = this.state;
    const { saveEmail } = this.props;
    saveEmail(email);
  }

  render() {
    const { handleChange, state: { disabled }, addEmail } = this;

    return (
      <div>
        <input
          type="text"
          data-testid="email-input"
          placeholder="Email"
          name="email"
          onChange={ ({ target }) => handleChange(target) }
        />

        <input
          type="password"
          data-testid="password-input"
          placeholder="Password"
          name="password"
          onChange={ ({ target }) => handleChange(target) }
        />

        <Link to="/carteira">
          <input
            type="button"
            disabled={ disabled }
            value="Entrar"
            onClick={ () => addEmail() }
          />
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (payload) => dispatch(addUser(payload)),
});

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
