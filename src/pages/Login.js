import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import login from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      btnDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.emailValidation = this.emailValidation.bind(this);
  }

  emailValidation() {
    const { email, password } = this.state;
    const regEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const maxLength = 5;
    if (password.length > maxLength && regEmail.test(email)) {
      this.setState({
        btnDisabled: false,
      });
    } else {
      this.setState({
        btnDisabled: true,
      });
    }
  }

  /**
   * https://learnetto.com/blog/react-form-validation
   * Site usado axiliar no segundo parâmetro do setState
  */
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.emailValidation());
  }

  handleClick(event) {
    event.preventDefault();
    const { dispatchLogin, history } = this.props;
    dispatchLogin(this.state);
    history.push('/carteira')
  }

  render() {
    const { email, password, btnDisabled } = this.state;
    return (
      <form>
        <input
          type="text"
          data-testid="email-input"
          onChange={ this.handleChange }
          name="email"
          value={ email }
        />
        <input
          type="password"
          data-testid="password-input"
          onChange={ this.handleChange }
          name="password"
          value={ password }
        />
        <button
          type="submit"
          onClick={ this.handleClick }
          disabled={ btnDisabled }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (state) => dispatch(login(state)),
});

Login.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
